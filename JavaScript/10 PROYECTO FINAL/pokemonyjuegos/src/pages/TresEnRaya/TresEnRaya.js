import "./TresEnRaya.css";
import { cellPulsada } from "../../utils/index";


const template = () => `
<div id="containergame">
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
    </div>
    `

    
const listener = () => {
 const cells = document.querySelectorAll(".cell");
     cells.forEach((cell, index) => {
        cell.addEventListener("click", (e) => cellPulsada(e,index));
    })
};
export const PrintTemplateTresEnRaya = () => {
        document.querySelector("main").innerHTML = template();
        document.querySelector("#buttonDashboard").style.display = "block";
    listener();
}





