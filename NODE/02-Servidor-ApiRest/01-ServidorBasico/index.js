// un servidor escucha las solicitudes enviadas a un puerto especifico

//!--- Lo primero será requerir el protoco http con node

// http es un protocolo que se usa para transmitir información en internet
//nos lo impormtamos o lo requerimos
// Es usado por navegadores para comunicarse con los servidores web
// Arquitectura petición - respuesta ----- req / res
//nodemon es para que lo cambie sin tener que volver a lanzarlo

const http = require("http");

//! ----- Creamos el servidor web con el protocolo con createServer

const app = http.createServer((req, res) => {
  // Configuramos la respuesta del servidor

  res.statusCode = 200; // Si es un 200 esta correcta

  //Vamos a meter un htm para que nos parezca en pantalla
  //normalmente será un json o un multipack(que lleva archivos)
  res.setHeader("Content-type", "text/html");

  res.end("<h1>Buenos dias</h1>");
});

//! ---- Asignamos el puerto en el que va a escuchar el servidor
//Hay unos determonados para estos, como 8080, 8081, 3000...

app.listen(8080, () => {
  console.log("Conectado al puerto 8080 en  http://localhost:8080");
});
