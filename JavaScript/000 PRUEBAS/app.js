//! INSERTADO MEDIANTE CONTSANTE

// const template = `
// <input type="text" id="input-text" />
// <button type="button" id="button">Enter</button>
// `;

// const body = document.querySelector("#body");

// body.innerHTML = template;

//! INSERTADO MEDIANTE ARROW

const templateArrow = () =>
  `
  
<input type="text" id="input-text" />
<button type="button" id="button">Enter</button>
<div>Helloooo!!!</div>
`;

const body = document.querySelector("#body");

body.innerHTML = templateArrow();

let name = "";

const eventFunction = (evento) => {
  name = evento.target.value;
};

//! INPUT

const input = document.querySelector("#input-text");

input.addEventListener("input", (evento) => eventFunction(evento)); // Cambia cada vez que introduzco un caracter

//input.addEventListener("change", (evento) => eventFunction(evento)); // El evento se lanza cada vez que doy a enter

//!  BUTTON
const button = document.querySelector("#button");

const handleClick = () => {
  console.log(name);
};

// button.addEventListener("click", () => {
//   handleClick();
// });

// ! DIV

button.addEventListener("click", handleClick);

const div = document.querySelector("div");

div.addEventListener("click", () => console.log("click desde el div"));
