//El método push() añade uno o más elementos al final de un array
// y devuelve la nueva longitud del array.

//Le paso por props el array y los elementos que tengo que añadir
//Como no se cuantos son ni lo que son lo hago con rest,
//que nos permite representar un número indefinido de argumentos

//bucle for---> for ([expresion-inicial]; [condicion]; [expresion-final])sentencia
    //expresion-inicial es la declaracion de la vble
    //condición: se avalua antes de cada iteracción del bucle. Si es verdadera se ejecuta la sentencia
    //expresion final:expresión para ser evaluada al final de cada iteración del bucle. Esto ocurre antes de la siguiente evaluación de la condicion. 
    //Generalmente se usa para actualizar o incrementar la variable contador.
    //Sentencia: Una sentencia que se ejecuta mientras la condición se evalúa como verdadera

//En este caso en la sentencia lo que nhacemos es igualar la posición del elemento que estoy metiendo
//a la longitud del array

function pushCustom(array, ...elements) {
    for (let index = 0; index < elements.length; index++) {
        array[array.length] = elements[index];
    }
    return array.length
};

const num = [1,2,3] 

const resultado = pushCustom(num,2);

console.log(num);