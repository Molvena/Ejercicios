import "./Nav.css";
import { printHomePage } from "../../pages/Home/Home";
import { printPokePage } from "../../pages/Pokemons/Pokemons"; 
const template = () =>`
<nav>
<button id="navegateHome" class="btnNav">🏠</button>
<button id="navegatePokemons" class="btnNav">Pokemon</button>
<button id="navegateTopo" class="btnNav">Topo</button>
<button id="navegateAhorcado" class="btnNav">Ahorcado</button>
</nav>
`;

export const Listener = () => {

  
      const home = document.getElementById("navegateHome");
      home.addEventListener("click", () => {
        //console.log("🏠");
        printHomePage();
      });

      const topo = document.getElementById("navegateTopo");
      topo.addEventListener("click", ()=> {
        console.log("Topo");
        //PrintTopoPage();
      });
      
      const ahorcado = document.getElementById("navegateAhorcado");
      ahorcado.addEventListener("click", ()=> {
        console.log("Ahorcado");
        //PrintAhorcadoPage();
      });
      const poke = document.getElementById("navegatePokemons");
      poke.addEventListener("click", () => {
       printPokePage();
      });
       
    };

   
export const PrintNav = () =>{
    document.querySelector("header").innerHTML += template();
}

