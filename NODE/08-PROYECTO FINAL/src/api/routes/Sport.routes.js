
//Nos traemos express, para poder usar router express
const express = require("express");

//Esto se importa solo al requerirlo abajo si tengo el fichero abierto
const { upload } = require("../../middleware/files.middleware");
const { 
    createSport, 
    toogleAthletes, 
    getAllSports, 
    getByIdSport, 
    getByName, 
    getOlympics, 
    deleteSport
} = require("../controllers/Sport.controllers");

const SportRouter = express.Router();

SportRouter.post("/create",upload.single("image"), createSport);
SportRouter.patch("/toogle/:id",toogleAthletes);
SportRouter.get("/getAllSports", getAllSports);
SportRouter.get("/getByIdSport/:id", getByIdSport);
SportRouter.get("/getByName/:name", getByName);
SportRouter.get("/getOlympics", getOlympics);
SportRouter.delete("/delete/:id", deleteSport);

module.exports = SportRouter;
