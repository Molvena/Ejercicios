import "./Login.css";
import { initControler } from "../../utils/route";


const template = () => `
  <div id="containerLogin">
    <h1 id="titleLogin">Login</h1>
    <input type="text" name="username" id="username" />
    <button id="buttonLogin">Iniciar Sesión</button>
  </div>
`;
//Tenemos un formulario que es un div con un h1 y un input y un boton enviar
//Le vamos a meter un evento al boton

const listeners = () => {
  const buttonLogin = document.getElementById("buttonLogin");
  buttonLogin.addEventListener("click", () => {
    const input = document.getElementById("username");
    const valueInput = input.value;
//Le metemos el valor del input al localStorage
    localStorage.setItem("user", valueInput);
    //Y llamamos al initControler sin meterle nada 
    //para que vuelva al route.js y vuelva a valorar si tenemos usuario o no 
    initControler();
    //Si tenemos usuario pintaremos el dashboard y si no el login
  });
};

export const PrintLogin = () => {
  document.querySelector("main").innerHTML = template();
  //Ahora pintamos el login en el main
  document.querySelector("nav").style.display = "none";
  //Y le damos el valor none a la nav
  // para que no me aparezca la nav hasta que no estoy logado
  listeners();
};
