import "./Login.css";
import { initControler } from "../../utils/route";


const template = () => `
  <div id="containerLogin">
    <h1 id="titleLogin">LOGIN</h1>
    <input type="text" name="username" id="username" />
    <button id="buttonLogin">enviar</button>
  </div>
`;

const listeners = () => {
  const buttonLogin = document.getElementById("buttonLogin");
  buttonLogin.addEventListener("click", () => {
    const input = document.getElementById("username");
    const valueInput = input.value;

    localStorage.setItem("user", valueInput);
    initControler();
  });
};

export const PrintLogin = () => {
  document.querySelector("main").innerHTML = template();
  document.querySelector("nav").style.display = "none";
  listeners();
};
