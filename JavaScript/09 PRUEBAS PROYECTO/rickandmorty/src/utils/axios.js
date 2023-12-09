import axios from "axios";

export const axiosUtil = async (options) => {
return await axios.request(options).then((res) => res.data)
};

//Importamos la librería desde la librería axios
// Hacemos una función que se exporta, que hace un request, es decir una llamada a una API.
//con las opciones que le indique
// Es una función asíncrona que recibirá unas opciones. 
//!TODOS SUS HEREDEROS DEBERAN SER ASÍNCRONOS
//Me traigo los datos de la Api y retorno 
//(espero) a la petición le meto unas opciones y lo gestiono con promesas(.then) 
// La res.data es la respuesta de la api
// Es una función reutilizable, me vale para llamar a lo que quiera. 
//A la Api que quiera con las opciones que quiera.

//.request es un metodo que recibe parametos
//.then se utilza para la gestión de las promesas
