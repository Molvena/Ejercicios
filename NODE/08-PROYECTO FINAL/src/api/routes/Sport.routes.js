
//Nos traemos express, para poder usar router express
const express = require("express");

//Esto se importa solo al requerirlo abajo si tengo el fichero abierto
const { upload } = require("../../middleware/files.middleware");
const { createSport } = require("../controllers/Sport.controllers");

const SportRouter = express.Router();

SportRouter.post("/create",upload.single("image"), createSport);

module.exports = SportRouter;
;