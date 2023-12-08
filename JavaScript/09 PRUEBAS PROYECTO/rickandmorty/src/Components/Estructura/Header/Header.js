import "./Header.css";
import { PrintNav } from "../../Nav/Nav";


const template = `
<header> Soy el Header 😃</header>
`
export const PrintHeader = () => {
   (document.querySelector("#app").innerHTML += template);
   PrintNav();
}
   