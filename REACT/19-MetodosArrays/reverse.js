//El método reverse() invierte el orden de los elementos de un array. 
//El primer elemento pasa a ser el último y el último pasa a ser el primero.
//SIN aumentar el espacio del array ni creando uno nuevo
//Valor devuelto: El array invertido.
//en el bucle for podemos poner varias expresiones dentro de cada una delas tres expresiones que lo definen
//Definimos el indice izquierdo y el derecho y vamos generando las condiciones
//Antes de cambiar la primera parte del array lo guardamos en una variable para despues poder colocarlos en la parte derecha



function customReverse(array) {
    for (let leftIndex = 0, rightIndex = array.length-1; leftIndex < rightIndex; leftIndex++, rightIndex--) {
        let temp = array[leftIndex];
        array[leftIndex] = array[rightIndex];
        array[rightIndex] = temp;
                      
    }
return array
    
};

const num = [1,2,3,20,4,5,6];
const invertido = customReverse(num);
console.log("invertido1", invertido);

//otra manera de hacerlo es con un while:
//Crea un bucle que ejecuta una sentencia especificada
//mientras cierta condición se evalúe como verdadera. 
//Dicha condición es evaluada antes de ejecutar la sentencia

function customReverse2(array) {
    let leftIndex = 0;
    let rightIndex = array.length-1;
    
    while (leftIndex < rightIndex) {
        let temp = array[leftIndex];
        array[leftIndex] = array[rightIndex];
        array[rightIndex] = temp;
        leftIndex++;
        rightIndex--;
    }

    return array
};
const num2 = [1,2,3,20,4,5,6];
const invertido2 = customReverse2(num2);
console.log("invertido2", invertido2);