import "./Dashboard.css";
import { initControler } from "../../utils/index";
const template = () => `
  <div id="containerDashboard">
    <ul>
      <li>
        <figure id="navigatePokemon">
          <img class:"pokemon"
            src="https://res.cloudinary.com/dkr0cj7oc/image/upload/v1702818716/images_rbj8ii.png"
            alt="go to page pokemon"
          />
        </figure>
      </li>
      <li>
        <figure id="juegos">
          <img class:"juego"
            src="https://res.cloudinary.com/dkr0cj7oc/image/upload/v1702818672/download_p80n1d.png"
            alt=" go to game"
          />
        </figure>
      </li>
    </ul>
  </div>
`;
//Tenemos todos estos contenedores en el template.
//A cada uno de los figure le vamos a dar un escuchador
// que nos va a llevar a pintar las diferentes páginas 

const listeners = () => {
  const botonPokemon = document.getElementById("navigatePokemon");
  botonPokemon.addEventListener("click", ()=>{
  initControler("Pokemon")});

  const botonJuego = document.getElementById("juegos");
  botonJuego.addEventListener("click", ()=>{
  initControler("TresEnRaya")});

};

export const PrintDashboard = () => {
  document.querySelector("nav").style.display = "flex";
  //Este de arriba es para que se vea la nav
  document.querySelector("main").innerHTML = template();
  listeners();
};

