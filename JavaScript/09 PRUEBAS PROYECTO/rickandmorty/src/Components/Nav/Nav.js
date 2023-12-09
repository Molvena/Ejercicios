import "./Nav.css";
import { printHomePage } from "../../pages/Rick/Rick";
import { PrintBusquedaPage } from "../../pages/Busqueda/Busqueda";

//!defino el template

const template = () =>`
<nav>
<button id="navegateHome" class="buttonNav">RICK</button>
<button id="navegateBusqueda" class="buttonNav">BUSQUEDA</button>
</nav>`;

//Les puedo dar un id a cada boton porque tienen funcionalidades distintas
//Les doy la misma clase para maquetarlos por igual

//!Añado los escuchadores de eventos

export const Listener = () =>{
    const home = document.getElementById("navegateHome");
    home.addEventListener("click", () =>{
        //console.log("Soy el Home");Esto es para que me lo caque por consola
        //Ahora llamo a la funcion definida en Home.js para que me lleve a esa pagina
        printHomePage();
    });
        
    const busqueda = document.getElementById("navegateBusqueda");
    busqueda.addEventListener("click", () =>{
        //console.log("Soy la busqueda");
        PrintBusquedaPage();
    });    
}


  


//En la PrintNav apunto al Header porque es ahi donde quiero insertar los botones

//!Funcion que pinta y exporto

export const PrintNav = () =>
(document.querySelector("header").innerHTML += template());

//Los listeners los tengo que importar en el initTemplate
//La printNav la tengo que importar en el Header que es donde tendgo los botones,para que se rendericen alli.
