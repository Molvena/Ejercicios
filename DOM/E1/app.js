//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme


const buttom = document.querySelector(".showme");
console.log("🚀 ~ file: app.js:5 ~ buttom:", buttom);


//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

const h1 = document.querySelector("#pillado");
console.log("🚀 ~ file: app.js:11 ~ h1:", h1);

//1.3 Usa querySelector para mostrar por consola todos los p

const p = document.querySelectorAll("p");
console.log("🚀 ~ file: app.js:16 ~ p:", p);


//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

const pokemon = document.querySelector(".pokemon");
console.log("🚀 ~ file: app.js:22 ~ pokemon:", pokemon);


//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
//data-function="testMe".

const atributo = document.querySelectorAll(`[data-function="testMe"]`);

console.log("🚀 ~ file: app.js:30 ~ atributo:", atributo)

//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
//data-function="testMe".

const atributo3 = document.querySelectorAll(`[data-function="testMe"]`);

console.log(atributo3[2]);
