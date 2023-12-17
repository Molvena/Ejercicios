
import "./Header.css";
import { changeColorRGB } from "../../utils/changeColor";

const template = () => `
  <img
    src="https://res.cloudinary.com/dkr0cj7oc/image/upload/v1702485747/download_l01gvx.jpg"
    alt="title hub game website (app)"
    class="logo"
  />
  <nav>
    <img
      src="https://res.cloudinary.com/dq186ej4c/image/upload/v1682684561/changeColor_tat29q.png"
      alt=" change to style mode page"
      id="changeColor"
    />
    <img
      src="https://res.cloudinary.com/dkr0cj7oc/image/upload/v1702818672/download_p80n1d.png"
      alt=" navigate to home app"
      id="buttonDashboard"
    />
    <img
      src="https://res.cloudinary.com/dkr0cj7oc/image/upload/v1702818340/1828404_nsuj9w.png"
      alt="logout"
      id="buttonLogout"
    />
  </nav>
`;

//Aqui hago el escuchador del evento del boton del cambio de color de fondo
//(tengo que importarme arriba la función changeColorRGB)
const listeners = () => {
   const changeColor = document.getElementById("changeColor"); //Apunto a la id del boton
  changeColor.addEventListener("click", () => {
    const colorRGB = changeColorRGB();
    //colorRGB es el color que nos devuelve la función
    document.body.style.background = colorRGB; 
    //esto es una forma de apuntar al color de fondo del body
    //Se puede apuntar asi porque es el body y no hace falta hacerlo con un querySelector
  });
};



export const PrintTemplateHeader = () => {
  document.querySelector("header").innerHTML = template();
  listeners();
};
