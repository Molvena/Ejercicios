
import { axiosUtil } from "../utils/axios";

const getAll = async () =>{
    const optionRequest ={
        method: "GET",
        url: "https://rickandmortyapi.com/api/character"
    };
    return await axiosUtil(optionRequest);
}

//En axios.js he obtenido la respuesta de la API y la he guardado 
//en la funcion axiosUtil que he exportado 
//Esa funcion es generica y sirve para cualquier página
//Ahora la importo aqui, a la carpeta servicios
//y aqui es donde le voy a dar los datos de la Url y el metodo
//de la api que me quiero traer
//Lo hacemos para que las url de las apis estén en una carpeta concreta,
// y si cambian las urls de las apis solo lo tengo que cambiar en una carpeta. 
// Al archivo le doy el nombre de la api.(el icono de la A es de Angular)

//Configuro una función getAll() con el request concreto
//que contiene el metodo y la URL
//La función getAll es asíncrona.
//Es decir, espero a obtener los datos de la url
//y cuando los tengo
//retorno la función axiosUtil, que es la que me da la data
//Es decir ahora ya tengo la data de la API
//Pero eso tiene muchos datos y yo solo necesito algunos
//Exporto esta funcion al archivo de mapeo
// mappeoDataRicky.js, tambien en utils
//En ese archivo creare la funcion mapeoData que me recorre 
//uno a uno los ojjetos de la data filtrandome los datos que yo quiero
//En este caso seran name e image

//que contiene las opciones concretas que yo necesito.