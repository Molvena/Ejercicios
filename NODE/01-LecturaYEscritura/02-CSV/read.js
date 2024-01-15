import csv from "csv-parser";
import {createReadStream} from "fs";

//Creamos constante donde pushear los datos

const municipios = [];

//Usamos la función createReadStream(nombre del archivo en string)
//y procesamos el archivo
//.pipe lo configura para leerlo.
//Aqui le decimos que las separaciones sean ;
//.on recibe la tipología y ejecuta la acción

createReadStream("indicator.csv")
.pipe(csv({ separator: ";" }))
.on("data", (data) => municipios.push(data))
.on("end", () => console.log(municipios));

//ejecutamos con npm run read