//En este archivo recibimos de los servicios la informacion de la pokeapi
//y filtramos los datos que nos interesan: name, id, tipo...

import { getByIdPokemon } from "../services/pokemon.service";


export const getDataPokemonBucle = async() => {
    const arrayPokemon = [];
    for(let id=1; id<151; id++){
    arrayPokemon.push(await getByIdPokemon(id));
    };
   ;
    return mappeo(arrayPokemon);
    
};
  
const mappeo = (data) => {
    const resultadoPokemon = data.map((item)=>({
        name: item.name,
        image: item.sprites.other.dream_world.front_default,
        type: item.types,
        id: item.id,
        height: item.height,
        weight: item.weight
}));
    return resultadoPokemon;
}

    // habilidad: item.abilities,
    // region: item.location_area_encounters,



//Primero creo una función con la que voy a obtener los 150 pokemon
//Sera asincrona por herencia (2º paso)
//Para eso defino un array vacio donde los voy a ir metiendo: RawData
//y hago un bucle for de getByIdPokemon del 1 al 151
//con un push para sacarlos todos
//Tendre que hacer tambien un map para que me saque solo los datos
//que yo quiero de cada pokemon
//Este map lo hago despues pero lo llamo desde la primera funcion
//Esto es posible por el Hoisting

