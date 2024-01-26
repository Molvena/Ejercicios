//Vamos a crear un controlador que nos va a crear un Character
//Usaremos insomnia, metemos el path y creamos la solicitud
//Nuestra base de datos se va a llenar

// Traemos la funcion de borrado de imagenes por si el usuario al subir
// un nuevo character tiene un error que esa imagen se borre

const { deleteImgCloudinary } = require("../../middleware/files.middleware");

//Nos traemos el modelo creado anteriormente

const Character = require("../models/Character.model");

//Creamos una función asíncrona create y post 

const create = async (req, res, next) =>{
    //Si tenemos una imagen que nos viene por el req.file la guardamos 
    //se guarda en el req.file que es un objeto, en la clave path
    //Le ponemos el optional chaining para que no rompa si no hay imagen
    let cathImg = req.file?.path;

    try {
        //Actualizar indexes
        //Con el try catch hacemos los indexes que son los indices propios
        //de los datos(claves únicas), para que si hay un modificado posterior 
        //a la creación del controlador no se modifique
        await Character.syncIndexes();
        const newCharacter = new Character(req.body);
         // Comprobamos si hay imagen para añadirla al Character creado
         //aqui requerimos el body, que son  los datos que se han metido en insomnia y que
         //corresponden al resto del esquema.
         if (cathImg) {
            newCharacter.image = cathImg;
         } else{
            //si no hay imagen metemos una  por defecto
            newCharacter.image = "https://res.cloudinary.com/dkr0cj7oc/image/upload/v1706026499/icono_usuario_xdy2ts.jpg";
         };

         //Ahora guardamos el character creado
         const saveCharacter = await newCharacter. save();

         //Comprobamos si se ha guaradado el character creado para lanzar una respuesta
         if (saveCharacter) {
            //si se ha guardado lanzamos una respuesta correcta con los datos de Character generados
            return res.status(200).json(saveCharacter);
         } else {
            //Si no se ha guardado hay un error y lo lanzamos en la respuesta
            return res
            .status(404).json("No se ha guardado en la base de datos");
         }
    } catch (error) {
            //Solo entramos en el catch cuando ha habido un error
            //SI HA HABIDO UN ERROR -----
            //Tenemos que borrar la imagen en cloudinary 
            //porque se sube antes de que nos metamos en el controlador--->
            // porque es un middleware que está entre la peticion del cliente y el controlador
            // comprobar si hay imagen en req.file porqe si es asi 
            //se ha subido a cloudinary y hay que borrarla
        req.file?.path && deleteImgCloudinary(cathImg);
        next (error);
        return res.status(409).json("Error en la creacion del Character");
    }
};

module.exports = {create};