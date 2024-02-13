//Nos traemos la funciíon de multer para la subida de ficheros

const { upload } = require("../../middleware/files.middleware");
//Importamos los controladores 

const {
     createAthlete,
     } = require("../controllers/Athlete.controllers");

//Nos traemos express, para poder usar router express
const express = require("express");

const AthleteRouter = express.Router();

//Añadimos nuestras rutas
// En medio de la ruta y del controlador se encuentra
// el middleware de subida de ficheros a cloudinary
// multer tiene el metodo .single() para subir una sola imagen
// por el req.file va a recibir una clave que se llama image y con esa
// clave quiero que el midddleware upload (de multer) me lo suba a cloudinary
// para que este disponible cuando entre
// al controlador mediante la req.file.path ===> 
//esto es igual a la URL de la imagen en cloudinary

AthleteRouter.post("/create", upload.single("image"), createAthlete);

module.exports = AthleteRouter;