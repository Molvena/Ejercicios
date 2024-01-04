
import "./Header.css";
import { changeColorRGB } from "../../utils/changeColor";
import { initControler } from "../../utils/route";

const template = () => `
  <img
    src="https://res.cloudinary.com/dkr0cj7oc/image/upload/v1702485747/download_l01gvx.jpg"
    alt="title hub game website (app)"
    class="logo"
  />
  <nav>
    <img
      src="https://res.cloudinary.com/dkr0cj7oc/image/upload/v1703958997/images_g7tfsx.jpg"
      alt=" change to style mode page"
      id="changeColor"
    />
    <img
      src="https://res.cloudinary.com/dkr0cj7oc/image/upload/v1704388461/17e8d8cd525c5140afde00e0740e22e2_wihl01.jpg"
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
    //Ahora hago el escuchador del boton del Dashboard
    const buttonDashboard = document.getElementById("buttonDashboard");
    buttonDashboard.addEventListener("click", () => {
      initControler("Dashboard");
      //El evento me lleva al archivo route en el que tengo el initControler
      //Y le meto que ejecute el caso Dashboard en el que tendre el printDashboard
  });
    //Ahora hago el escuchador del boton del Logout
    const buttonLogout =document.getElementById("buttonLogout");
    buttonLogout.addEventListener ("click", () => {
      localStorage.removeItem("user");
      initControler();
      //Lo que me hace estar logado es que el user esta en el localStorage
      //por lo que para salir tengo que borrarlo
      //Y luego de nuevo llamo al initControler para que se vaya al caso undefinned
      //Y me muestre el login de nuevo
    })
};


export const PrintTemplateHeader = () => {
  document.querySelector("header").innerHTML = template();
  listeners();
};
