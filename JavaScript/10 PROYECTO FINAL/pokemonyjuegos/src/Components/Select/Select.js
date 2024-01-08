//Hacemos una función printSelectTypePokemon
//en la que recorremos cada uno de los tipos 
//y llamamos a la funcion que los inyecta
//Creamos con createElement una etiqueta del tipo select 
//Recorremos los tipos, en ellos tendremos los types 
//creamos las options tb con createElement
//No podemos crear un template porque hay que ir creando 
//las options e ir inyectandolas como hijos del select.
//Primero creeamos el elemento padre y luego creamos los hijos en el bucle
//Despues hay que meterle el valor del tipo y despues 
//se la inyectamos como input al valor del select(optionType)
//Ahora lo pintamos en la pagina de pokemon
//Tenemos un contenedor que se llama filterButtom, 
//lo pintamos ahí, desde el archivo select.
//Le inyectamos el select con un append. 
//No podemos hacerlo con un innerHTML, porque no tenemos template. 
//Le tenemos que meter un escuchador
//lo pasamos por el archivo de barril y lo llamamos 
//en la pagina de pokemon dentro de getDataService
//recibiendo los tipos y la data PrintSelectTypePokemon(types,data)
import "./Select.css";
import { printGallery } from "../../pages";
import { filterDataPokemonSelect } from "../../utils";

const listener = (allData) => {
    const select = document.querySelector("select");

    select.addEventListener("change",(e)=>{
        const filterInfoPokemon = filterDataPokemonSelect(allData, e.target.value);
        printGallery(filterInfoPokemon);
    });
};


export const printSelectTypePokemon = (types,allData) => {
    const selectType = document.createElement("select");
    const optionType = document.createElement("option");
    
    optionType.textContent = "Todos";
    selectType.appendChild(optionType);

    types.map((type) => {
        const optionType = document.createElement("option");
        optionType.textContent = type;
        selectType.appendChild(optionType);
      });
    
      document.getElementById("filterButton").appendChild(selectType);
    
      listener(allData);
}