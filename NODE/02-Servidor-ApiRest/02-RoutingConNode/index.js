// Requerimos protocolo http

const http = require("http");

// Creamos el servidor web con createServer
//y configuramos la respuesta del servidor

const app = http.createServer((req, res) => {
  // req ------> req.url --- es el endpoint de la solicitud
  //req corresponde a la request, la petición

  console.log(req.url);
  const url = req.url;

  const method = req.method;

  // Depende de la url que recibamos vamos a ejecutar una cosa u otra
  //A lo que no le pongo nada es el método GET por defecto


  switch (url) {
    case "/saludo":
      res.end("<h1>Hola!! </h1>");
      break;
    case "/despedida":
      res.end("<h1>Hasta luego</h1>");
      break;

    default:
      break;
  }

//Aqui le damos que si se cumplen las condiciones nos devuelva getAlumns

  if (method === "GET" && url === "/avengers") getAvengers(res);
});

const getAvengers = (res) => {
const avengers = [
    {
        name: 'SpiderMan',
        power: 70
    },
    {
        name: 'Dr.Strange',
        power: 80
    },
    {
        name: 'Hulk',
        power: 110
    }
];

  //HAy que pasarlo a string
  const dataString = JSON.stringify(avengers);

 //Configuramos los headers 

  res.setHeader("Content-type", "application/json");

//Y enviar las respuestas
  res.end(dataString);
};

//Asignamos el puerto en el que va a escuchar el servidor

app.listen(8080, () => {
  console.log("Conectado al puerto 8080 en el http://localhost:8080");
});
