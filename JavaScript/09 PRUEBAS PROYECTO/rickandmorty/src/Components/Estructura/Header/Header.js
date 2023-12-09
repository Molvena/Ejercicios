import "./Header.css";
import { PrintNav } from "../../Nav/Nav";


const template = `
<header> Rick and Morty </header>
`
export const PrintHeader = () => {
   (document.querySelector("#app").innerHTML += template);
   PrintNav();
}
   