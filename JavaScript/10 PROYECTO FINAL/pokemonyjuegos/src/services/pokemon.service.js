import { axiosUtil } from "../utils";

//Importo la funcion de axios que gestiona la asincronía
//Defino una funcion con todos los datos
//que será tambien asícrona por ser heredera
//Le doy la url y el método
//La url será dinámica al meterle ${id}
//Cuando llame a esta funcion tendre que definirle a cuantos 
//y qué ids quiero llamar


export const getByIdPokemon = async(id) => {
    const optionRequest = {
        method: "GET",
        url: `https://pokeapi.co/api/v2/pokemon/${id}/`
    };
    return await axiosUtil(optionRequest);
};

//Esta funcion la exporto a utils/dataPokemon.js
//donde voy a defnir esos ids