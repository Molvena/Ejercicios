import "./Nav.css";

const template = () =>`
<nav>
<button id="navegatePokemons" class="btnNav">Pokemon</button>
<button id="navegateTopo" class="btnNav">Pokemon</button>
<button id="navegateAhorcado" class="btnNav">Pokemon</button>
</nav>
`;

export const Listener = () => {
      const poke = document.querySelector("#navegatePokemons");
        poke.addEventListener("click", () => {
        console.log("Boton");
        //PrintHomePage();
    })};

   
export const PrintNav = () =>{
    document.querySelector("header").innerHTML += template();
}

