//REquerimos la libreria fs

import {writeFile} from "fs";

//Datos que qqueremos escribir en csv

const alumnos = [
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
  ];

  //Creamos la función que convierte los datos

  const converToCSV = (data) => {
  //Creamos vble vacía donde iremos añadiendo datos  
    let csv = "";

  //La vble headers contiene las claves, que seran name, age y job .
  //Se las añadimos a la vble separadas por un ; 
  //para añadir una nueva linea ponemos \n 
  //Cogemos la posicion 0 porque nos da lo mismo
  //pero si en cada posicion hubiera claves diferentes, 
  //tendriamos que recorrer el array y coger las que no estan repetidas
  //Object.keys nos da las claves del objeto
 
    const headers = Object.keys(data[0]);

    csv += headers.join(";") + "\n";
  
    //Escribimos la info correspondiente a las columnas 
    //en la primera fila
    //Ahora hacemos un bucle para cada fila
    //En el segundo bucle (headers.forEach) vamos a decirle
    //que excepto en la primera fila (index>0)
    //no me vuelva a escribir las cabeceras
    //sino que me ponga un punto y coma
    //Y despues le digo que me añada el item de cada fila
    data.forEach((fila) => {
      //console.log("headers", headers);
      headers.forEach((item, index) => {
        if (index > 0) {
          csv += ";";
        }
        //console.log("row", fila[item]);
        csv += fila[item];
      });
        csv += "\n";
    });
  
    return csv;
  };
  //y añadimos una nueva linea con \n 

  const CSVAlumns = converToCSV(alumnos);
  
  writeFile("alumnos.csv", CSVAlumns, () => console.log("Archivo escrito"));

  //ejecutamos con npm run write
  //me crea el archivo alumnos.csv