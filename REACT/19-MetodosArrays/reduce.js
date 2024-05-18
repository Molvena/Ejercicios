//El método reduce() ejecuta una función reductora
// (funcion que combina elementos del array para reducirlos a un unico valor)
// sobre cada elemento de un array, devolviendo como resultado un único valor.

//La función reductora recibe cuatro argumentos:
// Acumulador (acc)
// Valor Actual (cur)
// Índice Actual (idx)
// Array (src)

//Sintaxis
//arr.reduce(callback(acumulador, valorActual[, índice[, array]])[, valorInicial])

//!Repasar!!

function customReduce(array, callback, valorInicial) {
    let acumulator = valorInicial;
    for (let index = 0; index < array.length; index++) {
       acumulator = callback(acumulator,array[index],index, valorInicial);
         
    }
    return acumulator; // Devuelve el valor acumulado
}


const numeros = [1, 2, 3, 4];
const sumaTotal = customReduce(numeros, (acc, curr) => acc + curr, 0);
console.log(sumaTotal); // Debería mostrar 10