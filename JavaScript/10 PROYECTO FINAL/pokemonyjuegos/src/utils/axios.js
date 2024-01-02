
//primero me importo la libreria
import axios from "axios";
 //Ahora creo la función axiosUtil
 //que me gestiona la asincronía
 //Esto es siempre igual 
export const axiosUtil = async (options) => {
  return await axios.request(options).then((res) => res.data);
};

//Esta funcion la exporto a service/pokemon.service.js


