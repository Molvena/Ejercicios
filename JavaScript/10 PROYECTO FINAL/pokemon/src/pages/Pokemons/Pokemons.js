import "./Pokemons.css";
import { PrintFigurePokemon } from "../../Components/Figure/Figure";
import { mappeoData } from "../../utils/mapeoDataPokemon";

const template = ()=>`
<div id="containerPokePage">
<h2>Poke </h2>
</div>
`

const getData = async () =>{
    const dato = await mappeoData();
    printGallery(dato);
}

const printGallery = (data) => {
data.map((item) => PrintFigurePokemon(item.name, item.image));
}



export const printPokePage = () =>{
    document.querySelector("main").innerHTML = template();
    getData();
};