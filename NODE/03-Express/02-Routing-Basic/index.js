//Creamos servidor con enrutado
//Requermos express

const express = require("express");

//Creamos const con el puerto para despues

const PORT = 8081;

//Creamos const con el servidor--> metodo express

const app = express();

//ROUTING
//express js analiza las rutas para ver si hay coincidencia 
//con las definidas en nuestra función-->app.use-->
//entonces entra en la función y ejecuta el código
//Creamos los diferentes endpoints
//Aqui en la primera /saludo es el path
const router = express.Router();

router.get("/saludo",(req, res, next)=>{
    res.send("<h1>Hola que tal</h1>");
});


router.get("/movies",(req,res,next)=>{
//Mockeamos los datos = simulamos
    const movies = ["El Rey Leon", "Gladiator", "Troya"];
//Enviamos respuesta 
res.send(movies);
});

router.get("/despedida",(req, res, next)=>{
    res.send("<h1>Hasta luego</h1>");
});

//Configuramos el uso del servidor
//le damos la ruta seguida de router, que la formaran las diferentes opciones

app.use("/api/v1/", router);

//Escuchamos al servidor en el puerto correspondiente

app.listen(PORT, ()=>{
    console.log(`Servidor conectado al puerto http://localhost:${PORT}`);
});