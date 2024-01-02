import {  PrintDashboard, PrintLogin, PrintPokemonPage } from "../pages/index";

export const initControler = (paginaQueVamosAPintar) => {
  switch (paginaQueVamosAPintar) {
    //La primera opcion es saber si el usuario esta en el clocal storage
    //Si tengo usuario pinto la primera pagina principal que es el Dashboard
    // y si no, pinto la pagina de login
    //los case se refieren a la pagina que vamos a pintar que serian Pokemon. Dashboard...
    case undefined:
      localStorage.getItem("user") ? PrintDashboard() : PrintLogin();
      break;
    case "Pokemon":
        PrintPokemonPage();
     break;

     case "Dashboard":
      PrintDashboard();
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