const { error } = require("console");
const fs = require("fs");

//Creamos array donde almacenar datos
const movie = [];

//Leemos el archivo
//Es una función asíncrona en sí misma.
//Si no lo fuera pondriamos readFileSync
//Parámetros
//1 File: String con ela ruta del archivo
//2 Data: Informacion en string que leeremos del archivo
//3 Error:Mensaje en caso de error


fs.readFile("./src/data/movie.json", (error,data) => {
    error? console.log(error) : movie.push(JSON.parse(data));

    console.log(movie);
} );

//ejecutamos con npm run read