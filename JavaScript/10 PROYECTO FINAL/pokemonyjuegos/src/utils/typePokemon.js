//En este archivo voy a crear una función 
//que me devuelva los tipos de pokemon que hay
//Creo un array vacio y hago un bucle
//y meto los que no estan repetidos

//Como hay varios tipos dentro de cada pokemon
//tendre que hacer un bucle dentro de otro bucle
//para recorrer los tipos dentro de cada pokemon
export const typesPokemon = (totalPokemon) =>{
    const tipos =[];
    totalPokemon.forEach((item,index) => {
        item.type.forEach((tipo)=> {
            !tipos.includes(tipo.type.name)&& tipos.push(tipo.type.name);
        });
    });

    return tipos;
}