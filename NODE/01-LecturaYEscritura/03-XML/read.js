//Requerimos fs. Así o con import
const fs = require("fs");

const { XMLParser } = require("fast-xml-parser");

//Hacemos la instancia de un objeto con el método XMLParser
///Parámetros: Nombre del archivo en string, endcoding del archivo,
//y callback que gestiona el error y la data
//Para utilizar estos datos debemos llamar a otra función 
//que sera la que me permita utilizar los datos del archivo
// mediante un destructuring

const parseInstance = new XMLParser();

fs.readFile("rootXML.xml", "utf8", (error, data) => {
  let dataParse;

  error ? console.log("error", error) : (dataParse = parseInstance.parse(data));

  const { alumnosRootElement } = dataParse;

  const { alumnos } = alumnosRootElement;
  console.log(alumnos);
});



//ejecutamos con npm run read