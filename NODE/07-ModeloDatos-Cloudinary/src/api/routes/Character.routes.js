//Nos traemos upload, función de multer para la subida de ficheros

const { upload } = require ("../../middleware/files.middleware");

//Importamos los controladores
//Ahora tenemos solo uno pero ira creciendo

const { create } = require ("../controllers/Character.Controllers");

//Nos traemos express, para poder usar router express
//Creamos un router especifico para Character
//Al llamarlo dispondremos de todas la rutas
//Será llamado en el index

const express = require ("express");

const CharacterRouter = express.Router();

//Añadimos nuestras rutas
// En medio de la ruta y del controlador (funión create)
// Se encuentra el middleware de subida de ficheros a cloudinary
// multer tiene el metodo SINGLE para subir una sola imagen
// por el req.file va a recibir una clave que se llama image y con esa
// clave quiero que el midddleware upload (de multer) me lo suba a cloudinary
// para que este disponible cuando entre
// al controlador mediante la req.file.path ===> esto es igual a la URL de la imagen en cloudinary
//create es nuestra función que nos hemos traido de los controladores

CharacterRouter.post("/create", upload.single("image"),create);

module.exports = CharacterRouter;




