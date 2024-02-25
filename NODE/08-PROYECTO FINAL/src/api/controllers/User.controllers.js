const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config();
const nodemailer = require("nodemailer");
const validator = require("validator");
const randomCode = require("../../utils/randomCode"); 
const User = require("../models/User.model");
const {deleteImgCloudinary} = require("../../middleware/files.middleware");
const { generateToken } = require("../../utils/token");
const randomPassword = require("../../utils/randomPassword");
const enumOk = require("../../utils/enumOk");


// --------------------------------------------------------
//?---------------REGISTER CON REDIRECT -------------------
// --------------------------------------------------------

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
    //----SEND CODE CONFIRMATION (redirect)
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

//?----RESEND CODE
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
      tls:{
        rejectUnauthorized:false 
      }
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
    
//?----CHECK NEW USER
//

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

//?----LOGIN


const login = async(req, res, next) =>{
  try{
    //Desectructuamos el mail y la password del req.body
    const { email, password } = req.body;
    //Buscamos a este usuario en la BD por el mail. Método findOne()
    //Como la clave es igual al valor, la pongo solo una vez, 
    //si fuera diferente tendria que poner email:email

    const userDB = await User.findOne({email});
 
    if(userDB) {
         //Si existe comparamos contraseñas
         //La de la base de datos esta encriptada y la de la req.body no, 
         //por lo que uso el método bcrypt.compareSync() para compararlas
       
        
      if (bcrypt.compareSync(password, userDB.password)) {
          //Si coinciden devuelvo el true y puedo generar el token.
          //a partir del id del usuario de la BD y el email que mete el ususario(req.body) 
        
        const token = generateToken(userDB._id, email);
          
        //Enviamos respuesta 200 con el con el user y el token
        return res.status(200).json({
          user:userDB,
          token})
      } else {
        //Si no coincide genero error Contraseña incorrecta
       return res.status(409).json({
        error:"Contraseña incorrecta",
        message:"Intentalo de nuevo"
        });
      };

    } else {
      //Si no existe el userDB. Usuario no encontrado
      return res.status(404).json({error:"Ususario no encontrado"});
    };

  } catch (error) {
    return res
    .status(409)
    .json({error: "error en el login", message: error.message})
  };
};

//?----AUTOLOGIN
//Despues de checkear se nos va a loguear automáticamente
//La diferencia con el login es que aquí se comparan dos contraseñas encriptadas
//por lo que no hace falta llamar al bcrypt

const autoLogin = async (req, res, next) => {
  try {
    // destructuring del email y password del req.body
    //Aunque en este caso no la mete el usuario
    //(lo veremos en el front)
    const { email, password } = req.body;

    // Buscamos al user en la DB con findOne()
    const userDB = await User.findOne({ email });

    // Comprobamos que el user exista en la base de datos
    if (userDB) {
      // Si existe comparamos contraseñas(amabas encriptadas)
      
      if (password === userDB.password) {
        // Si coinciden generamos el token
        const token = generateToken(userDB._id, email);

        // Enviamos la respuesta con el token
        return res.status(200).json({
          user: userDB,
          token,
        });
      } else {
        // Lanzamos error en contraseña
        return res.status(409).json({
          error: "Contraseña incorrecta",
          message: "Intentalo de nuevo",
        });
      }
    } else {
      // Lanzamos un error user no encontrado
      return res
        .status(404)
        .json({ error: "User no encontrado", message: "User no registrado" });
    }
  } catch (error) {
    return res
      .status(409)
      .json({ error: "Error en el login", message: error.message });
  }
};

//?----FORGOT PASSWORD
//CAMBIO DE CONTRASEÑA CUANDO NO ESTAS LOGUEADO
//por olvido
//Antes tenemos que crear randomPassword en utils

const forgotPassword = async(req, res, next) => {
  try{
    //Hacemos destructuring del email del body

    const { email } = req.body;

    //Buscamos al user en la BD por su email
    const userDB = await User.findOne({email});

    if (userDB) {
      //Si existe enviamos correo con la nueva password
      //hacemos el redirect con la función sendPassword
      return res.redirect(
        307,
        `http://localhost:8081/api/v1/user/forgot/sendPassword/${userDB._id}`
      );
    } else {
      // Usuario no encontrado
      return res
        .status(404)
        .json({ error: "Usuario no encontrado", message: "Revise el email" });
    }
   } catch(error) {
    return res
    .status(409)
    .json({ error: "Error al cambiar de contraseña", message: error.message });
  }
};

//----SEND PASSWORD (redirect)
//Hacemos la función que envía la nueva contraseña
//Y que metemos en el redirect


const sendPassword = async (req, res, next) => {
  try {
    // Desectructuramos el id de req.params
    const { id } = req.params;

    // Buscamos al usuario en la BD con findById()

    const userDB = await User.findById(id);

    //Comprobamos si el usuario existe

    if (userDB) {
      // Si existe generamos password segura random y la enviamos
      //(con la funcion de utils)
      const passwordSecure = randomPassword();

      //ENVIO DEL CORREO
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
        tls:{
          rejectUnauthorized:false 
        }
      });

      // creamos las opciones del mensaje
      const mailOptions = {
        from: emailENV,
        to: userDB.email, // se lo enviamos al user registrado
        subject: "INFO",
        text: `User: ${userDB.name}, su nuevo código de login es: ${passwordSecure} Nos ponemos en contacto con uste porque hemos recibido una solicitud de olvido de contraseña`,
      };

      // enviamos el email
      transporter.sendMail(mailOptions, async (error, info) => {
        if (error) {
          //Si da error
          return res
            .status(409)
            .json({ error: "correo no enviado", message: error });
        } else {
          //ENCRIPTAMOS CONTRASEÑA para actualizar al user
          // con esta contraseña encriptada 
          const newPasswordEncript = bcrypt.hashSync(passwordSecure, 10);

          try {
            // Intentamos actualizar el user con findByIdAndUpdate
            //El primer parámetro lo tenemos en el destructuring d elos params
            //El segundo parámetro es lo que queremos actualizar
            await User.findByIdAndUpdate(id, { password: newPasswordEncript });

            // Hasemos un TEST comprobar que el user 
            //se ha actualizado correctamente

            // buscamos al usuario actualizado para comparar 
            //su contraseña encriptada con la enviada
            const userUpdate = await User.findById(id);

            // Compruebo la nueva contraseña segura 
            //con la contraseña encriptada que tiene el user guardado actualizado
            if (bcrypt.compareSync(passwordSecure, userUpdate.password)) {
              // si es true se ha actualizado de forma correcta
              return res.status(200).json({
                updateUser: true,
                sendPassword: true,
              });
            } else {
              // Si las contraseñas no coinciden el user 
              //no se ha actualizado de forma correcta
              //pero se ha enviado la contraseña
              return res.status(409).json({
                error: "User no actualizado",
                message: "Se envio la nueva contraseña",
              });
            }
          } catch (error) {
            // error al actualizar el user
            return res.status(409).json({
              error: "Error al actualizar el user",
              message: error.message,
            });
          }
        }
      });
    } else {
      // Si el usuario no existe
      return res
        .status(404)
        .json({ error: "User no encontrado", message: "Mal email" });
    }
  } catch (error) {
    return res.status(409).json({
      error: "Error durante el envio del correo",
      message: error.message,
    });
  }
};

//?----GHANGE PASSWORD (una vez logueado)-----> Autenticada
//El usuario mete la clave antigua y la nueva para cambiarla
const changePassword = async (req, res, next) =>{
  try {
    //Desectructuramos la password y la newPassword del req.body
    const {password, newPassword} = req.body;
    //Comprobamos si la contraseña introducida es suficientemente strong
    //para ello usamos isStrongPassword(), metodo de validator
    const validate = validator.isStrongPassword(newPassword);
    if(validate) {
      //Si es suficientemente strong sacamos el id del usuario
      //Como esta autenticado lo saco de req.user
      const {_id} =req.user;
      //Comprobamos si la password introducida (req.body) es igual 
      //a la que tengo guardada en la base de datos (req.user), 
      //ésta está encripatada
      //por lo que tengo que usar bcrypt.compareSync()
      if(bcrypt.compareSync(password, req.user.password)) {
        //Si coinciden encriptamos la contraseña y actualizamos el user
        const newPassHashed = bcrypt.hashSync(newPassword,10);

        try{
          await User.findByIdAndUpdate(_id, {password:newPassHashed});

          //Ahora hacemos un test en tiempo real para comprobar
          //que el usuario se ha actualizado
          //Buscamos al user actualizado
          const userSave = await User.findById(_id);
          //Comprobamos la contraseña del body con la del user actualizada
          if(bcrypt.compareSync(newPassword, userSave.password)){
            //Si coinciden enviamos respuesta correcta
            return res.status(200).json({user:userSave, testupdate: true})
          }else{
            //Si no: error. No se ha actualizado la contraseña
            return res.status(409).json({ testupdate: false})
          }
        } catch{
          //Error al actualizar el usuario
          return res.status(409).json({
            error: "Error al actualizar el user",
            message: error.message,
          })
        }
      } else{
        //las contraseñas no coinciden
        return res.status(409).json({
          error: "Contraseña antigua incorrecta",
          message: "Pruebe otra contraseña",
        });
      }
    } else {
      //la contraseña introducida no es segura
      return res.status(409).json({
        error: "La contraseña no es segura",
        message:"Minimo 8 caracteres, 1 simbolo, 1 mayuscula, 1 minuscula y un numero",
      });
    }
  } catch {
    //Error general de cambio de contraseña
    return res.status(409).json({
      error: "Error general de cambio de contraseña",
      message: error.message,
    });
  }
};

//?----UPDATE-----> Autenticada
//Actualizamos los datos del usuario

const updateUser = async (req, res, next) =>{
  try{
    //Capturamos la nueva imagen subida a cloudinary (si viene en req.file)
    let catchImg = req.file?.path;
    console.log(req.file);

    //Actualizamos los indexes. Esto es porque hay algunos campos que son únicos
      await User.syncIndexes();
      //Hacemos una nueva instancis del User con los datos traidos del body
      //a la que llamamos patchUser
      const patchUser = new User(req.body);
      //Comprobamos que el req.file traiga la imagen para añadirla 
      //al user actualizado. Dos formas: 
      //if(req.file) {patchUser.image= catchImg} 

      req.file && (patchUser.image = catchImg);

      //Ahora salvaguardo la info que no quiero que cambie
      //La que quiero que se mantenga de la que hay en la BD
      //Al ser una ruta autenticada tengo acceso al req.user que se crea en el middleware

      patchUser._id = req.user._id;
      patchUser.password = req.user.password;
      patchUser.rol = req.user.rol;
      patchUser.confirmationCode = req.user.confirmationCode;
      patchUser.email = req.user.email;
      patchUser.check = req.user.check;

      console.log("patchUser",patchUser);

      //Comprobamos mediante el enumOk que si el user quiere cambiar el género, 
      //este entre las opciones a elegir
      if(req.body?.gender) {
        //Si trae el genero por el body
        //Evaluo que el check sea true, si es asi lo cambio poniendo el que trae 
        //por el body, y si no dejo el que tenia
        const resultEnum = enumOk(req.body?.gender);
        patchUser.gender = resultEnum.check? req.body.gender: req.user.gender;
      }  

        //Ahora hacemos un try/Catch para guardar al usuario
        //No usamos save, eso es solo para cuando lo creamos
        try {
          //Lo guardamos con el metodo findByIdAndUpdate(id,info que queremos actualizar)
          await User.findByIdAndUpdate(req.user._id, patchUser);

          //Ahora hacemos un test en tiempo real RUNTIME
          //para ver si se ha actualizado la información
          //Buscamos al user guardado ya actualizado
          const updateUser = await User.findById(req.user._id);
          console.log("updateUser",updateUser);

          //Sacamos las claves del req.body para saber lo que quiere actualizar
          const updateKeys = Object.keys(req.body);

          //Creo un array vacio donde voy a guardar el test
          const testUpdate = [];

          //Recorremos las claves que el user quiere actualizar con un forEach

          updateKeys.forEach((item)=>{
            if (updateUser[item] === req.body[item]) {
              //Hacemos una doble verificaión comprobando además 
              //que es diferente a lo guardado en el req.user (BD)
              if (updateUser[item] !== req.user[item]) {
                //Si ambas verificaciones son true, añadimos un objeto al array del test
                testUpdate.push({[item]:true});
                
              } else {
                //la información es la misma que teniamos en la BD
                testUpdate.push({[item]:"Los datos introducidos son los mismos que habia guardados"});
              }

            }else {
              //si la informacion no coincide 
              testUpdate.push({
                [item]: false,
              });
            }
          });
           //Tenemos que checkear el req.file por si hay que hacer 
           //el test con la imagen
           // Si la imagen del user actualizado es igual 
           //a la imagen nueva, el test es correcto.
           // Si no es igual, no se actualizó y ponemos el test en false.
           if(req.file) {
            updateUser.image === catchImg? 
            testUpdate.push({image:true}): 
            testUpdate.push({image:false});
           };
           //si existe el test de la imagen, es porque hay imagen nueva
           //por lo cual, si la de la BD es diferente a la que 
           //tenemos por defecto, la borramos.
           if(
            testUpdate.image && 
            updateUser.image !== "https://res.cloudinary.com/dkr0cj7oc/image/upload/v1706383271/Curso/g9xrmbndjzckzsblvx8g.jpg"
            ){
              deleteImgCloudinary(req.user.image);
            };

            //Sacamos un console.log del test
            console.log("test", testUpdate);

            //una vez finalizado el test lanzamos la respuesta correcta
            //con el user actualizado
            return res.status(200).json({user:updateUser,test:testUpdate});
            
        } catch{
          //No se ha guardado al usuario
           //tengo que borrar la foto de cloudinary
           if(req.file) {
            deleteImgCloudinary(catchImg)
          };
          return res.status(409).json({
            error:"Error al actualizar el usuario",
            message: error.message
          })
         
        };
      

  } catch {
    //Error general del update
     //tengo que borrar la foto de cloudinary
     if(req.file) {
      deleteImgCloudinary(catchImg)
    };
    return res.status(409).json({
      error:"Error general al guardar al usuario",
      message:error.message
    }); 
  }
};




//?----DELETE-----> Autenticada
//El usuario que hace la petición se borra a sí mismo

const deleteUser = async (req, res, next) =>{
  //Buscamos al user por id y lo borramos
  try{
    await User.findByIdAndDelete(req.user._id);

    //Ahora intentamos buscarlo a ver si se ha borrado
    const existUser = await User.findById(req.user._id);

    if(!existUser) {
      //si no existe, borro la imagen de cloudinary
      //si es diferente a la puesta por defecto
      //y envío respuesta correcta
      req.user.image !== "https://res.cloudinary.com/dkr0cj7oc/image/upload/v1706383271/Curso/g9xrmbndjzckzsblvx8g.jpg"
      && deleteImgCloudinary(req.user.image);

      return res.status(200).json("User borrado");
    } else {
      return res.status(409).json({error: "Error al borrar al usuario"})
    }
 

  } catch {
    //Error general al borrar el user
    return res.status(409).json({
      error: "Error general al borrar al usuario",
      message:error.message
    });
  }
};


      module.exports = {
        registerWithRedirect,
        sendCode,
        resendCode,
        checkNewUser,
        login,
        autoLogin,
        sendPassword,
        forgotPassword,
        changePassword,
        updateUser,
        deleteUser
      }