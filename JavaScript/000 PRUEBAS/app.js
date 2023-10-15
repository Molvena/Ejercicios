

function saludo(name = "Nombre desconocido") {
  console.log(`${name} buenos dias que tal estas`);
}

const saludoArrow = (name) => {
  console.log(`${name} buenos dias que tal estas`);
};

const alumno = "Ruben";
saludo(alumno);

const profe = "Dario";
saludo(profe);

saludoArrow(profe);

saludo(); 
//!----------------------------------------------------------------------
//? ------------> funcion que no tenga return ni tenga parametros
//!----------------------------------------------------------------------

const printNumbreOne = () => {
  console.log(1);
};

function printNumberOneFunction() {
  console.log(1);
}

// diferencia en sintaxis

function printOne() {
  console.log(1);
} ///----> no se puede poner sin llaves si hay una unica linea de ejecucion
let name = "Pedro";
const printOneArrow = () =>
  name === "Pedro"
    ? console.log("hola")
    : name === "Luis"
    ? console.log("luis")
    : name === "lucas"
    ? console.log("lucas")
    : console.log("tu quien eres?"); // nos deja hacer esto cuando tengamos una unica linea de ejecucion (en nuestro caso el console)
// aqui arriba hay un return de forma implicita

printOne();
printOneArrow();

//!----------------------------------------------------------------------
//? ------------> funcion que no tenga parametros pero si tenga return
//!----------------------------------------------------------------------

function logado() {
  return "logado ok";
}

const logadoArrow = () => {
  return "logado ok";
};
// esto de abajo devuelve un template
const componenteCarta = () => `
<figure>
    <h1>Soy una carte</h1>
</figure>`;

const componenteOne = componenteCarta();
console.log("🚀 ~ file: app.js:83 ~ componenteOne:", componenteOne);

const logadoOk = logadoArrow();
console.log(logadoOk);

//!----------------------------------------------------------------------
//? ------------> funcion que tenga parametros y que tenga un return-----
//!----------------------------------------------------------------------

// 1) arguments no esta disponible en las arrow
function sumar(a, b) {
  console.log(arguments); /// los arguments es un coleccion de elementos que aparece su posicion y el valor de los parametros
  console.log(arguments[1]);
}
sumar(2, 3);

const sumaArrow = (a, b) => {
  //console.log(arguments); -----> no se puede tener acceso a esta variable local, porque solo se crea en lass function
};

sumaArrow();

// 2) Objectos personalizados con valores que guardan funciones ---> las arrow no tienen acceso a la propiedad this

// object - object
const obj = {
  name: "Lucia",
  sayHi: () => {
    console.log(`hola que tal estas ${this.name}`);
    let apellido = "lerida";
  }, // this.name nos daria undefined
};
obj.sayHi(); // ------> thjis.name nos da undefined

const objFunction = {
  name: "Lucia",
  sayHi: function () {
    console.log(`hola que tal estas ${this.name}`);
    let apellido = "lerida";
  },
};

objFunction.sayHi(); // hola que tal estas Lucia----> si tenemos acceso a al this.name
