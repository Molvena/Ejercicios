//Requerimos dotenv y express

const dotenv = require("dotenv");

dotenv.config();

const express = require("express");



//Requerimos cloudinary
//esto lo hacemos despues cuando hayamos creado nuestra funcion en middleware.js

// const { configCloudinary } = require("./src/middleware/files.middleware");

// configCloudinary();

//Conectamos con la base de datos

const { connect } = require ("./src/utils/db");

connect();

//Configuramos Cloudinary

const { configCloudinary } = require("./src/middleware/files.middleware");
configCloudinary();

//Vbles de entorno

const PORT = process.env.PORT;

//Creamos el servidor web

const app = express();

// damos las cors al server

const cors = require("cors");

app.use(cors());


//Definimos las limitaciones

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: false }));


//Definimos las rutas

const UserRoutes = require("./src/api/routes/User.routes");
app.use("/api/v1/user", UserRoutes);

const AthleteRoutes = require("./src/api/routes/Athlete.routes");
app.use("/api/v1/athlete", AthleteRoutes);

const SportRouter = require("./src/api/routes/Sport.routes");
app.use("/api/v1/sport", SportRouter)

const CommentRoutes = require("./src/api/routes/Comment.routes");
app.use("/api/v1/comment", CommentRoutes);

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
