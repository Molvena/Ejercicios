import "./Header.css";
import { PrintNav } from "../../Nav/Nav";

const template = `
<header> Proyecto Elena </header>
`
export const PrintTemplateHeader = () => {
   (document.querySelector("#app").innerHTML += template);
   PrintNav();
}
   
//!Funcion que pinta y exporto

// export const PrintNav = () =>
// (document.querySelector("header").innerHTML += template());