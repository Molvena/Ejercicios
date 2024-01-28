//Nos traemos upload, función de multer para la subida de ficheros
const { upload } = require("../../middleware/files.middleware");
//Importamos los controladores


const { createMovie, toggleCharacters, getAll, getById, getByName, update, deleteMovie,  } = require ("../controllers/Movie.controllers");

//Nos traemos express, para poder usar router express
//Creamos un router especifico para Character
//Al llamarlo dispondremos de todas la rutas
//Será llamado en el index

const express = require ("express");

const MovieRouter = express.Router();

MovieRouter.post("/create" , createMovie);
MovieRouter.patch("/toggle/:id", toggleCharacters);
MovieRouter.get("/getAll", getAll);
MovieRouter.get("/getById/:id", getById);
MovieRouter.get("/getByName/:name", getByName);
MovieRouter.patch("/update/:id", update);
MovieRouter.delete("/delete/:id", deleteMovie);

module.exports = MovieRouter;