const dotenv = require("dotenv");
dotenv.config();

const express = require("express");

//TRAEMOS LA FUNCION DE CONEXION A LA DB - Y EJECUTAMOS -> archivo interno

const { connect } = require("./src/utils/db");

// ejecutamos
connect();

//Creo la vble del puerto, pero 
//Llamamos a la vble de entorno de nuestro .env
//que en este caso es PORT, que es como la he llamado en el archivo .env
const PORT = process.env.PORT;

//Creamos el servidor
const app = express();

//Escuchamos el servidor

app.listen(PORT,()=>{
    console.log(`Servidor conectado al puerto http://localhost:${PORT}`);
});