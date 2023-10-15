const newArray = []; // esta es la forma moderna dee incializar una variable de tipo array

const newArrayExample = new Array(); // esta forma antigua ya no se utliza

const alumnos = ["dani", "elena", "Bárbara", "jorge", "nelson"];

//? --------> acceso a sus posiciones.......

console.log(alumnos[1]); // elena

//? --------> meter un elemento en una posicion concreta

alumnos[4] = "Rodolfo";
alumnos[7] = "Maria";
console.log("🚀 ~ file: app.js:14 ~ alumnos:", alumnos);
//! --------------------------------------------------------------------------------
//? ---------------------- metodos y propiedades------------------------------------
//! ---------------------------------------------------------------------------------

//! ------> 1) propiedad: length
console.log(alumnos.length); // 8

//! ------> 2) POP-> ELIMINAR EL ULTIMO ELEMENTO (modifica el array original) -----> te elimina la ultima posicion y la devuelve
alumnos.pop();
console.log("🚀 ~ file: app.js:24 ~ alumnos:", alumnos); // ----> maria ya no aparece

//! ------> 3) shift---> te elimina el primer elemento y lo devuelve por si quieres guardarlo en una variable
console.log(alumnos.shift()); // el metodo devuelve a dani
console.log("🚀 ~ file: app.js:28 ~ alumnos:", alumnos); // pero el array original se modifica y ya no esta dani que esa

//! ------> 4) unshift ----> introduce varias  elemento en la posicion inicial
alumnos.unshift([1, 2, 3, 1, 1], 11, 112, "HOLA");
console.log("🚀 ~ file: app.js:32 ~ alumnos:", alumnos);

//! ------> 5) splice -----> sacar cosas y poner en sustitucion otras cosas
// --------> 4 es el numero elementos que quiero borror, NUEVO
// --------> podemos meter todos los elementos que queramos no solo uno, NUEVO
alumnos.splice(0, 4, "dani", "nelson", "lucia");
console.log("🚀 ~ file: app.js:37 ~ alumnos:", alumnos);
//! ------> 6) reverse

const reverseExample = [1, 2, 3, 4, 5, 6, 7];
console.log(reverseExample.reverse());
console.log("🚀 ~ file: app.js:43 ~ reverseExample:", reverseExample);
//! ------> 7) join y push

const saludo = ["hola", "que tal?"];
const saludoJoin = saludo.join(" ");
console.log("🚀 ~ file: app.js:48 ~ saludoJoin:", saludoJoin);

// Ejercicio quiitar los mumeros del string
const textoExample = "En 241 un 22335 lugar 23525 de la mancha que ...";
const stringTextoExample = textoExample.split(" ");
console.log("🚀 ~ file: app.js:52 ~ stringTextoExample:", stringTextoExample);

const newArrayPalabrasOk = [];

stringTextoExample.forEach((palabra, index) => {
  // si no es un numero me lo metes en la ultima posicion del array con el metodo push
  isNaN(palabra) == true && newArrayPalabrasOk.push(palabra); // nos da un true si no es un numero

  /// ------> como un ternario version 2

  // ----->isNaN(palabra) == true ? newArrayPalabrasOk.push(palabra) : null;

  /// ------> con un if version 3

  //if (isNaN(palabra)) newArrayPalabrasOk.push(palabra);
});

console.log("🚀 ~ file: app.js:56 ~ newArrayPalabrasOk:", newArrayPalabrasOk);

// ahora fuera del bucle lo que hacemos es transforma ese array en un string

const joinString = newArrayPalabrasOk.join(" ");
console.log("🚀 ~ file: app.js:75 ~ joinString:", joinString);

//! ------> 8) CONCAT

// concatena dos arrays
const alumnosOne = ["luis", "juan", "luis"];
const newAlumnosOne = ["leticia"];
const concatNewArray = alumnosOne.concat(newAlumnosOne);
console.log("🚀 ~ file: app.js:84 ~ concatNewArray:", concatNewArray);
//! ------> 9) toString()

const stringToArrayAlumnos = alumnosOne.toString();
console.log(
  "🚀 ~ file: app.js:88 ~ stringToArrayAlumnos:",
  stringToArrayAlumnos
); //   luis,juan
const sinComas = stringToArrayAlumnos.replaceAll(",", " ");
console.log("🚀 ~ file: app.js:93 ~ sinComas:", sinComas);
//! ------> 10) IndexOf() ----> la posicion dentro del array del elemento que le hemos pasado

console.log(alumnosOne.indexOf("luis")); // --_> posicion 0
console.log(alumnosOne.indexOf("lu")); // --_> -1 =  no lo ha encontrado

//! ------> 11) lastIndexOf()
console.log(alumnosOne.lastIndexOf("luis")); // ----> el 2
//! ------> 12) sort ----> ordena los elementos

const numberRandom = [1, 3, 33, 45, 67, 12, 4];
console.log(numberRandom.sort()); /// [1, 12,  3, 33, 4, 45, 67]
console.log(numberRandom.sort((a, b) => a - b)); // menor de a mayor
console.log(numberRandom.sort((a, b) => b - a)); // mayor a menor

/// ordenar alfanumericamente un conjuntos de string en un array
const numberString = ["abc", "yasdc", "bca", "aaa", "aa2212"];

console.log(
  numberString.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
  })
); // [ 'abc', 'yasdc', 'bca', 'aa', 'aa2212' ]
//! ------> 13) includes() ----> true si lo incluye y false si no lo incluye
const alumnosIncludes = ["luis", "juan", "luis"];
console.log(alumnosIncludes.includes("Luis".toLowerCase())); // siempre comparasr de minuscula a minuscula o a la inversa

//! -------------------- metodos nuevos que aun no estan en fase final --- tenerlo en cuenta
// 🔹 toReversed()
// 🔹 toSorted()
// 🔹 toSpliced()
// 🔹 with()

//todo -------------------------- EJERCICIO --------------------------------------------------
// sacar en que posiciones se repite un string dentro de un array

const animales = [
  "perro",
  "gato",
  "perro",
  "periquito",
  "pez",
  "perro",
  "gato",
  "perro",
  "periquito",
  "pez",
];

// ------> funcion normal

function buscar(list, palabraABuscar) {
  const allIndex = [];
  console.log("🚀 ~ file: app.js:147 ~ buscar ~ allIndex:", allIndex);
  list.forEach((element, index) => {
    // tenemos que compara que la palabra que queremos buscar coincide con la que estamos recorriendo
    // si coincide vamos a pusear dentro del array la posicion en la que se encuentra

    palabraABuscar == element && allIndex.push(index);
  });
  console.log("🚀 ~ file: app.js:147 ~ buscar ~ allIndex:", allIndex);
}
buscar(animales, "perro");

const buscarArrow = (list, palabraABuscar) => {
  const allIndex = [];
  console.log("🚀 ~ file: app.js:147 ~ buscar ~ allIndex:", allIndex);
  list.forEach((element, index) => {
    // tenemos que compara que la palabra que queremos buscar coincide con la que estamos recorriendo
    // si coincide vamos a pusear dentro del array la posicion en la que se encuentra

    palabraABuscar == element && allIndex.push(index);
  });
  console.log("🚀 ~ file: app.js:147 ~ buscar ~ allIndex:", allIndex.length);
};

buscarArrow(animales, "gato");

//todo------------- ejercicio quitar los repetidos ----------------------------

const animalesRepetidos = [
  "perro",
  "gato",
  "perro",
  "periquito",
  "pez",
  "perro",
  "gato",
  "perro",
  "periquito",
  "pez",
];

const newArraySinRepetidos = [];

animalesRepetidos.forEach(
  (element, index) =>
    !newArraySinRepetidos.includes(element) &&
    newArraySinRepetidos.push(element)
);

console.log(
  "🚀 ~ file: app.js:188 ~ newArraySinRepetido:",
  newArraySinRepetidos
);

//todo-------- Ejercicio contar los elmentos de cada uno en singular- -----

/// primero tenemos un arrray vacio que guarda la nformacion
// segundo si ya tenemos contado un elemento no volvemos a contarlo

const recuento = [];

// ----> recuento es de esta forma: [{palabra: "perro", repeticiones: 34},{palabra: "pez", repeticiones: 3},...]

animalesRepetidos.forEach((element, index) => {
  /// doblr bucle porque 1_--> el primero se para en un elemento y el 2) segundo vuelve a recorrer el array para contar ese elemento que me he parado

  // tenemls que evaluar si lo hemos contado o no dentro del array recuento
  let acc = 0;
  recuento.forEach((especie, index) => {
    if (element == especie.palabra) acc++;
  });
  // si contador que es acc es igual a cero quiere decir que esa palabra no la he contado
  // y si no la he ccontado me pongo a hacerlo
  if (acc == 0) {
    // ---> reincializo para volver a contar
    acc = 0;

    // la logica es que si el contador esta a cero entonces nos ponemos a contar con el segundo bucle del array de la lista original
    animalesRepetidos.forEach((item, index) => {
      /// si la palabra incial me pare en el primer bucle es igual a la palabra que estoy en el bucle ultimo
      // incremento el contador--> la variable funcional
      element == item && acc++;
    });

    recuento.push({ palabra: element, repeticiones: acc });
  }
});

// sin comentarios------->

const recuentoDos = [];

animalesRepetidos.forEach((element, index) => {
  let acc = 0;
  recuento.forEach((especie, index) => {
    if (element == especie.palabra) acc++;
  });
  if (acc == 0) {
    acc = 0;
    animalesRepetidos.forEach((item, index) => {
      element == item && acc++;
    });
    recuentoDos.push({ palabra: element, repeticiones: acc });
  }
});

/// teoria de arrays paralelos

// -------> primero sacas un array con los elemetos sin repetir

// -------> comparas ese array sin repetidos con el repetido

for (i = 0; i < animalesRepetidos.length; i++) {
  console.log(animalesRepetidos[i]);
}
