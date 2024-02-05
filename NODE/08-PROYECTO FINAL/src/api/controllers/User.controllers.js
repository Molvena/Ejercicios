const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config();
const nodemailer = require("nodemailer");
const randomCode = require("../../utils/randomCode"); 
const User = require("../models/User.model");


//REGISTER CON REDIRECT 
//Para registrarse nos redirecciona a otro controlador
//que es el que envía el código

const registerWithRedirect = async (req, res, next) => {
    //Coprobamos si hay imagen en la solicitud
    //metemos optional chaining por si no hay que no rompa el código
    let catchImg = req.file?.path;

    try {
        //Nos traemos el modelo y actualizamos indexes
        await User.syncIndexes();
        //Guardamos el código de confirmación en una vble
        let confirmationCode = randomCode();
        //Buscamos en la BD si hay algún user con el mail o el name
        //que hemos metido por el body. Metodo findOne()
        //es un método de mongoose que intercatua con la BD
        const userExist = await User.findOne(
            { email: req.body.email },
            { name: req.body.name }
        );
        
        //Comprobamos que ese user no existe
        if (!userExist) {
            // Si no existe lo creamos
            //Copiamos lo metdo por el body y le añadimos el confirmationCOde
            const newUser = new User({ ...req.body, confirmationCode });
            //Vemos si hay imagen en la solicitud y la añadimos
            //y si no le ponemos una por defecto
            if (req.file) {
                newUser.image = req.file.path;
            } else {
                newUser.image =
                  "https://res.cloudinary.com/dkr0cj7oc/image/upload/v1706383271/Curso/g9xrmbndjzckzsblvx8g.jpg";
            };
            //TEnemos creado el user con los datos, lo guardamos
            try {
                const userSave = await newUser.save(); 
                //Si el user se ha creado hacemos el redirect
                if(userSave) {
                    //Lo redirigimos a otro controlador
                    //Dejamos el 2º parámetro sin rellenar hasta que hagamos el controlador
                    return res.redirect(
                        307,
                        `http://localhost:8081/api/v1/user/register/sendMail/${userSave._id}`
                    );
                }else{
                    //El usuario no se ha creado
                    //TEngo que borrar la imagen de cloudinary
                    req.file && deleteImgCloudinary(catchImg);
                    return res.status(404).json({
                      error: "El user no se ha guardado",
                      message: "El user no se ha guardado",
                    });                    
                }
            }catch(error){
                // error al guardar el user
                 req.file && deleteImgCloudinary(catchImg);
                 return res
                    .status(409)
                    .json({ error: "El user no se ha guardado", message: error.message });
            }
        } else {
            // Error porque ya existe este usuario
            req.file && deleteImgCloudinary(catchImg);
            return res.status(409).json({
              error: "El usuario ya existe",
              message: "El usuario ya existe",
            });  
        }              

    } catch (error) {
        req.file && deleteImgCloudinary(catchImg);
        return res
          .status(409)
          .json({ error: "Error en el registro", message: error.message });
      }        
        //Error en el registro
    };

    //HACEMOS LA FUNCIÓN QUE ENVIA EL CODIGO DE CONFIRMACIÓN.
    //SEND CODE CONFIRMATION
    //Y que metemos en el redirect

    const sendCode = async (req, res, next) => {
        try {
          // Desectructuramos el id de los params
      
          const { id } = req.params;
      
          // Buscamos al user por el id de los params en la BD 
          //con el metodo .findById()
          const userDB = await User.findById(id);
           //Enviamos el email con el código 
          // llamamos a las variables de entorno
          const emailENV = process.env.EMAIL;
          const passwordENV = process.env.PASSWORD;
      
          // creamos el transporte
          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: emailENV,
              pass: passwordENV,
            },
            //añadimos esto porque a veces da error
            tls:{
              rejectUnauthorized:false 
            }
          });
      
          // creamos las opciones del mensaje
          const mailOptions = {
            from: emailENV,
            to: userDB.email, // se lo enviamos al user registrado
            subject: "Confirmation Code",
            text: `Su código de confirmación es ${userDB.confirmationCode}, gracias por confiar en nosotros`,
          };
      
          // enviamos el email
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) { //error en el envío del correo
              return res
                .status(409)
                .json({ error: "correo no enviado", message: error });
            } else {
                //Si no hay error devolvemos userDB y confirmationCode
              return res
                .status(200)
                .json({ user: userDB, confirmationCode: userDB.confirmationCode });
            }
          });
        } catch (error) {
          return res
            .status(409)
            .json({ error: "Error al enviar el email", message: error.message });
        }
      };

// RESEND CODE
//Por si se quiere volver a enviar el código de confirmación

const resendCode = async (req, res, next) => {
  try {
    // llamamos a las variables de entorno
    const emailENV = process.env.EMAIL;
    const passwordENV = process.env.PASSWORD;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailENV,
        pass: passwordENV,
      },
      //ver si hay que añadirle el tls
    }); 
    // Buscamos al usuario por el email que nos trae la solicitud con findOne
    const userSave = await User.findOne({ email: req.body.email });
    //Si el ususaio existe
    if (userSave) {
      // creamos las opciones del mensaje
      const mailOptions = {
        from: emailENV,
        to: req.body.email, // se lo enviamos al user registrado
        subject: "Confirmation Code",
        text: `Su código de confirmación es ${userSave.confirmationCode}, gracias`,
      };

      // enviamos el email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return res
            .status(409)
            .json({ error: "correo no enviado", message: error });
        } else {
          return res.status(200).json({ user: userSave, resend: true });
        }
      });
    } else {
      // Error no se encuentra al user por el email
      return res
        .status(404)
        .json({ error: "User no encontrado", message: "Introduzca otro email" });
    }
  } catch (error) {
    return res
      .status(409)
      .json({ error: "Error al enviar el código", message: error.message });
  }
};
    
// CHECK NEW USER
//Por si se quiere volver a enviar el código de confirmación

const checkNewUser = async (req,res,next) => {

  try {
      //Desectructuramos el email y el confirmationCode recibido de la solicitud (req.body)
    const { email, confirmationCode } = req.body;
    //Buscamos al usuario en la BD con .findOne() por su email
    //para comprobar si existe
    //Como la clave es ogual al valor, pongo email solo una vez

    const userExist = await User.findOne({email});

    //Si el usuario no existe lanzamos un error
    if (!userExist) {
      return res
        .status(404)
        .json({ error: "User no encontrado", message: "checkea el correo" });
    } else {
      // SI EXISTE, comprobamos los códigos, el que existe en la BD
      // y el que metemos por el body(que lo hemos desectructurado antes)
      if (userExist.confirmationCode === confirmationCode) {
        // Si es igual actualizamos el check del user coon un true
        //Lo actualizamos con updateOne() (un solo usuario)
        //y buscamos a ese user ya actualizado en la BD
        //para enviarle la respuesta
        
        try {
          await userExist.updateOne({ check: true });

          const updateUser = await User.findOne({ email });
          //Hacemos un test en tiempo real
          return res.status(200).json({
            user: updateUser,
            testCheckUser: updateUser.check == true ? true : false,
          });
        } catch (error) {
          //Capturamos el error si no podemos actualizar
          return res
            .status(409)
            .json({ error: "Error al actualizar", message: error.message });
        }
      } else {
        // Si los códigos no coinciden borramos a este user de la BD
        //con el método .findByIdAndDelete()

        await User.findByIdAndDelete(userExist._id);

        // si la imagen no es la que ponemos por defecto hay que borrarla
        if (
          userExist.image !==
          "https://res.cloudinary.com/dkr0cj7oc/image/upload/v1706383271/Curso/g9xrmbndjzckzsblvx8g.jpg"
        ) {
          deleteImgCloudinary(userExist.image);
        }
        // Lanzamos la respuesta avisando del borrado del user
        //Hacemos un test de delete a ver si se ha borrado correctamente
        return res.status(409).json({
          user: userExist,
          check: false,
          delete: (await User.findById(userExist._id))
            ? "user no borrado"
            : "user borrado",
        });
      }
    }
  } catch (error) {
    return res
      .status(409)
      .json({ error: "Error al checkear", message: error.message });
  }
};

// LOGIN





      module.exports = {
        registerWithRedirect,
        sendCode,
        resendCode,
        checkNewUser
      }