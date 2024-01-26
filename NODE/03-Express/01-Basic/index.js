//Requerimos express

const express = require("express");

//Creamos una constante con el puerto a utilizar
//para ejecutarlo despues (mas adelante esto lo hacemos en .env)

const PORT = 8081;

//Creamos una const con el servidor, que es quien usa express

const app = express();

//Escuchamos el servidor en el puerto 8081 (comillas francesas)

app.listen(PORT,()=>{
    console.log(`Servidor escuchado en el puerto http://localhost:${PORT}`);
})


