//Nos traemos upload, función de multer para la subida de ficheros

const { upload } = require ("../../middleware/files.middleware");

//Importamos los controladores


const { create, getAll, getById, getByName, update, deleteCharacter, toggleMovies } = require ("../controllers/Character.Controllers");

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
//Al meter el getAll si le doy a la opcion del desplegable me lo requiere autommaticamente

CharacterRouter.post("/create", upload.single("image"),create);
CharacterRouter.get("/getAll/", getAll);
CharacterRouter.get("/getById/:id", getById);
CharacterRouter.get("/getByName/:name", getByName);
CharacterRouter.patch("/update/:id", upload.single("image"), update);
CharacterRouter.delete("/delete/:id", deleteCharacter);
CharacterRouter.patch("/toogle/:id", toggleMovies);

module.exports = CharacterRouter;




