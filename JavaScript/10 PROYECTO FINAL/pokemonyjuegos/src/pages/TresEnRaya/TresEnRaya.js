import "./TresEnRaya.css";
import { cellPulsada } from "../../utils/index";


const template = () => `
<div id="game-board">
      <div class="cell" id="cell-0"></div>
      <div class="cell" id="cell-1"></div>
      <div class="cell" id="cell-2"></div>
      <div class="cell" id="cell-3"></div>
      <div class="cell" id="cell-4"></div>
      <div class="cell" id="cell-5"></div>
      <div class="cell" id="cell-6"></div>
      <div class="cell" id="cell-7"></div>
      <div class="cell" id="cell-8"></div>
    </div>
    <button id="reset-button">Reiniciar</button>
    `


    
const listener = () => {
 const cells = document.querySelectorAll(".cell");
     cells.forEach((cell) => {
        cell.addEventListener("click", cellPulsada());
    })
};
export const PrintTemplateTresEnRaya = () => {
    document.querySelector("main").innerHTML = template();
}