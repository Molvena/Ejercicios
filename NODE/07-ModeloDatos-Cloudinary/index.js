//Requerimos dotenv y express

const dotenv = require("dotenv");

dotenv.config();

const express = require("express");

//Requerimos cloudinary
//esto lo hacemos despues cuando hayamos creado nuestra funcion en middleware.js

const { configCloudinary } = require("./src/middleware/files.middleware");

configCloudinary();

//Conectamos con la base de datos

const { connect } = require ("./src/utils/db");

connect();

//Vbles de entorno

const PORT = process.env.PORT;

//Creamos el servidor web

const app = express();

//Definimos las limitaciones

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: false }));


//Definimos las rutas
//Requerimos CharacterRoutes (esto lo hacemos despues)
//una vez que lo hayamos creado en Character.routes.js

const CharacterRouter = require("./src/api/routes/Character.routes");

app.use("/api/v1/character", CharacterRouter);


//Cuando no encontramos las rutas generamos un error

app.use("*",(req, res, next) =>{
    const error = new Error("route not found");
    error.status= 404;
    return next(error);
});

//Cuando no el servidor crashea generamos otro error

app.use((error, req, res)=>{
    return res
        .status(error.status || 500)
        .json(error.message ||"Error inesperado");
});

// Revela la tecnología con la que esta realizado el back

app.disabled("x-powered-by");

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});
