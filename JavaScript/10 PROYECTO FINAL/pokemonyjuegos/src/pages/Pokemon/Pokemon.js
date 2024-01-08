import "./Pokemon.css";
import { filterDataPokemon, getDataPokemonBucle, typesPokemon } from "../../utils/index";
import { PrintFigurePokemon, printSelectTypePokemon} from "../../Components/index";


const template = () =>`
<div id="pokemon">
    <div id="containerFilter">
      <div id="spinnerButtonFilter"></div>
      <div id="filterButton"></div>
      <input
        type="text"
        id="inputPokemon"
        placeholder="Busca tu pokemon favorito"
      />
    </div>
           <div id="galleryPokemon"></div>
  </div>
`;

//llamo a getDataPokemonBucle donde he filtrado los datos que me interesan
//name, peso, etc
//llamo a los escuchadores del input

const getDataService = async () => {
  const data = await getDataPokemonBucle();
  const tipos = typesPokemon(data);
  //console.log("🚀 ~ file: Pokemon.js:24 ~ getDataService ~ tipos :", tipos );
  printSelectTypePokemon(tipos, data);
  listeners(data);
  console.log(data);
  printGallery(data);
}
//printGallery: es la funcion que me pinta las cartas
//recibe PrintFigurePokemon y los datos que quiero meterle segun el caso 
//en esta funcion hago un bucle con la información 
// y llamo a la función que me pinta las cartas 
//Es desacoplada. Despues la llamo en getDataService metiendole
//la data que me sale de la pokeapi 
export const printGallery = (dataPrint) => {
  document.getElementById("galleryPokemon").innerHTML = "";
  dataPrint.map((item)=>
  PrintFigurePokemon(item.name, item.id, item.image, item.type, item.height, item.weight));
};

//Ahora hago el evento del input, en el que llamare a filterDataPokemon
//Esta función la creo en utils en el archivo de su nombre y me va a filtrar 
//por los datos que meta en el input
//para que me vacie la galeria antes de filtrarme tengo que meterle en printGallery
//document.getElementById("galleryPokemon").innerHTML="";
//tengo que llamar al listeners desde getDataService y meterle como parametro todos
//los datos para que me filtre

const listeners = (totalData) => {
  const inputPokemon = document.getElementById("inputPokemon");
  inputPokemon.addEventListener("input", (InformacionInput)=>{
  const filterPokemon = filterDataPokemon(totalData, InformacionInput.target.value);
  //console.log(filterPokemon);
  printGallery(filterPokemon);
  });
}

export const PrintPokemonPage = () => {
  document.querySelector("main").innerHTML = template();
  getDataService();
};
