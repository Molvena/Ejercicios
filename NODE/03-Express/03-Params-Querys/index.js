//Las params y querys se utilizan para hacer rutas mas complejas
//y no tener que ir definiendo una a una creando un endpoint 
//para cada respuesta
//Primero creamos el servidor

const express = require("express");
const PORT=8081;

const app = express();

//LLamamos a Router() de express, que es quien nos va a crear las rutas

const router = express.Router();

//Simulamos unos datos para poder trabajar

const  alumnos = ["Jorge", "Barbara", "Dani", "Nelson", "Elena"];

//Creamos los diferentes endpoints con el metodo get
//Tenemos los params que se expresan con : y hay que meter
//algun dato en la ruta para que no nos devuelva un error
//Y estan tambien las querys que se representan con ? 
//y no es necesario meter algo en la ruta, se puede dejar vacío

router.get("/buscar/:name" ,(req,res,next)=>{
//Hacemos destructuring de los parámetros de la solicitud
const{name} = req.params;
console.log(name);
//Creamos un contador para sumarle 1 si encuentra el nombre 
//que metemos en la ruta y así luego poder darle opciones
//en función de si es mayor que 0, que significa que lo ha encontrado, o no.
 let acc = 0;
//Ahora hacemos un forEach y le decimos que si encuentra el 
//nombre en el array le sume 1
alumnos.forEach((alumno) =>{
    alumno.toLowerCase() === name.toLowerCase () && acc++;
});

//Ahora hacemos return que depende de un ternario
// con las diferentes opciones del contador
return acc > 0
?res.status(200).json("Se ha encontrado al alumno👍")
:res.status(404).json("No se ha encontrado al alumno 👎");
});

//http://localhost:8081/api/v1/buscar/elena
//Si metemos esto en la url nos saldra
//que se ha encontrado al alumno



router.get("/queryBuscar", (req, res, next)=>{
const { name, apellido } = req.query;

console.log("apellido por query", apellido);
console.log("name por query", name);


if (name) {
    let acc = 0;

    alumnos.forEach((alumno) => {
      alumno.toLowerCase() === name.toLowerCase() && acc++;
    });

    // Controlamos la respuesta
    return acc > 0
      ? res.status(200).json("Se ha encontrado el alumno 👍")
      : res.status(404).json("No se ha encontrado al alumno 👎");
  } else {
    // Sino hay nombre, es que no hemos metido ningun nombre en la query
    return res.status(404).json("No ha incluido el nombre en las querys");
  }
});

//http://localhost:8081/api/v1/queryBuscar?name=elena&apellido=gomez
//si queremos poner nombre y apellido lo separamos con &


//Al igual que en el caso anterior
//Configuramos el uso del servidor
//le damos la ruta seguida de router, que la formaran las diferentes opciones

app.use("/api/v1/", router);

//Escuchamos al servidor en el puerto correspondiente

app.listen(PORT, ()=>{
    console.log(`Servidor conectado al puerto http://localhost:${PORT}`);
});