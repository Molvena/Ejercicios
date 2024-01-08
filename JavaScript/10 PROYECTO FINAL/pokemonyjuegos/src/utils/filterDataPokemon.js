//Este archivo es para crear la función que filtra los datos del input de pokemon
//Hago la función a la que llamo en los listeners del input en la pagina Pokemon
//filtro los pokemons por la informacion que meto en el input

export const filterDataPokemon = (data, InformacionInput) => {
    const dataFiltrada = data.filter((item)=>
    item.name.toLowerCase().includes(InformacionInput.toLowerCase()));
    console.log(dataFiltrada);
    return dataFiltrada;
};

//Ahora hacemos la función del select
//la definimos con dos parametros, la data y el tipo seleccionado en el select
//El type es un array, por lo que entramos primero en la posicion 0
//y seleccionamos todos los del tipo en esa posicion
//despues repetimos para el segundo tipo
//Tenemos que ponerle el interrogante (optional chaining)
//para que no me rompa el código si no tengo el 2º tipo 
//pero ademas quiero que antes de hacer una seleccion tenga todos los pokemon
//Hago un condicional con las tres opciones
//opcion 1 cuando elijo Todos me devuelve sin filtro
//Opcion 2 cuando selecciono el tipo en la posicion 1
//Opcion 3 cuando selecciono el tipo en la posicion 0
//Esto lo llamo desde el componente select


export const filterDataPokemonSelect = (data, tipoSeleccionado) => {
    const filterTiposCero = data.filter((item) =>
    item.type[0].type.name.toLowerCase()
    .includes(tipoSeleccionado.toLowerCase())
    );

    const filterTiposUno = data.filter((item) =>
    item.type[1]?.type.name.toLowerCase()
    .includes(tipoSeleccionado.toLowerCase())
    );

if(tipoSeleccionado == "Todos") {
      return data;
    } else if(filterTiposCero.length ==0) {
      return filterTiposUno;
    } else {
      return filterTiposCero;
    }
};


