//Vamos a crear el servidor
//Para ello requerimos express y dotenv 

const express = require("express");

const dotenv = require("dotenv");

//Ejecutamos dotenv para poder utilizarlos
//con el metodo config()

dotenv.config();

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