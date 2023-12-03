// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click

const buttonE = document.querySelector("#btnToClick");

buttonE.addEventListener("click", () => console.log("soy un evento"));


// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const focusE = document.querySelector(".focus");



const nombre = (event) => {
     console.log(event.target.value);
   };
//console.log(nombre);
focusE.addEventListener("focus",(event) => nombre(event));


// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.


const inputE = document.querySelector(".value");

inputE.addEventListener("input",(event) => nombre(event));