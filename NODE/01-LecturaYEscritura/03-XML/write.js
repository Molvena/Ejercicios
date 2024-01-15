const fs = require("fs");

const { XMLBuilder } = require("fast-xml-parser");


// Creamos instancia de builder

let opciones = {
  ignoreAttributes: false,
  format: true,
};

const builder = new XMLBuilder(opciones);

console.log("Builder", builder);

//Creamos el objeto con el que crearemos el XML
//debe tener un elto grapeador que incluya una clave
// y un valor que sea el array de objetos


const alumnosROOT = {
  alumnosRootElement: {
    alumnos: [
      {
        name: "Rodri",
        age: "43",
        job: "dev",
      },
      {
        name: "Laura",
        age: "37",
        job: "libreria",
      },
      {
        name: "Antonio",
        age: "33",
        job: "dev",
      },
    ],
  },
};

//Creamos un nuevo objeto, que seran las opciones
//que recibirá el método XMLBuilder



//Instanciamos(copiamos cambiando) un nuevo objeto con el método XMLBuilder
const builderRoot = new XMLBuilder(opciones);

//Creamos el objeto XML utilizando el instanciador y el método build 

let output = builderRoot.build(alumnosROOT);

console.log("OUTPUTROOT", output);

//lamamos al método writeFile de fs para crear el archivo, 
//indicamos el nombre del archivo y el elemento que incluirá.

fs.writeFile("rootXML.xml", output, () =>
  console.log("Escritura correcta")
);

//Lo ejecutamos con el comando npm run xml_write?