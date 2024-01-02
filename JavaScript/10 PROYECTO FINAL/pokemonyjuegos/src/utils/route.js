import {  PrintDashboard, PrintLogin, PrintPokemonPage, PrintTemplateTresEnRaya } from "../pages/index";

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

     case "TresEnRaya":
      PrintTemplateTresEnRaya();
     break;
 
    default:
      break;
  }
};