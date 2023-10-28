//Iteración #4: Métodos findArrayIndex
//Crea una función llamada findArrayIndex que reciba como parametros 
//un array de textos y un texto y devuelve la posición del array 
//cuando el valor del array sea igual al valor del texto que enviaste 
//como parametro. Haz varios ejemplos y compruebalos.

const animales = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']



const findArrayIndex = (array, text) =>{
    const index = array.indexOf(text);
    return index;
}

console.log(findArrayIndex(animales, "Caracol"));
console.log(findArrayIndex(animales, "Salamandra"));