import {  PrintLogin } from "../pages";

export const initControler = (paginaQueVamosAPintar) => {
  switch (paginaQueVamosAPintar) {
    //La primera opcion es saber si el usuario esta en el clocal storage
    //Si tengo usuario pinto la primera pagina principal que es el Dashboard
    // y si no, pinto la pagina de login
    //los case se refieren a la pagina que vamos a pintar que serian Pokemon. Dashboard...
    case undefined:
      localStorage.getItem("user") ? console.log("Dashboard") : PrintLogin();
    case "Pokemon":
     // la funcion qur pinta la pagina PrintPagePokemon()
     break;

     case "Dashboard":
      //la funcion qur pinta la pagina PrintPageDash()
     break;

    case "Topo":
      //la funcion qur pinta la pagina PrintPageTopo()
     break;
   case "Memory":
     // la funcion qur pinta la pagina PrintPageMemoryGame()
     break;

    default:
      break;
  }
};