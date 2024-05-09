//El método reverse() invierte el orden de los elementos de un array in place. 
//El primer elemento pasa a ser el último y el último pasa a ser el primero.
//Valor devuelto: El array invertido.

function customReverse(array) {
    for (let index = array.length; index>=0; index--) {
        array.push(array[index])&&
        array.pull(array[array.length-index])
        

                
    }
return array
    
};

const num = [1,2,3,4,5,6];


const invertido = customReverse(num);

console.log(invertido);