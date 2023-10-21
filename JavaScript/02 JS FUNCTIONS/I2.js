const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

//con if

let longestWord = "";
let numLetras = 0; //si esto lo meto dentro de la funcion se me redefine a cero cada vez que recorre uno de los objetos, pero al estar fuera lo hace con el num de lertras anterior
avengers.forEach((superhero, index) => {  //tengo que poner dos parentesis porque son dos parametros
   
        if (superhero.length > numLetras) {
       // console.log(superhero.length); esto lo hago aqui dentro porque no me sale lo que quiero y asi puedo ver lo que pasa
       // console.log (numLetras); 
        numLetras =superhero.length; 
        longestWord = superhero;    
    };  
});

console.log(longestWord);


/// con un ternario

avengers.forEach((superhero, index) => {  
    superhero.length > numLetras? ((numLetras =superhero.length) && (longestWord = superhero)) : (null)  ;
});

console.log(longestWord); 

//con function

function findLongestWord(array){
    let palabra ="";
    let numLetras2 = 0;
    array.forEach((list,index)=>{
    list.length > numLetras2? ((numLetras2 =list.length) && (palabra = list)) :(null)});
    console.log(palabra);
  }
  findLongestWord(avengers);

//con arrow

const findLongestWord3 = (array) =>{
    let palabra ="";
    let numLetras2 = 0;
    array.forEach((list,index)=>{
    list.length > numLetras2? ((numLetras2 =list.length) && (palabra = list)) :(null)});
    console.log(palabra);
  }
  findLongestWord3(avengers);