//El método splice
//cambia el contenido de un array 
//eliminando elementos existentes y/o agregando nuevos elementos.

//Sintaxis
//array.splice(start[, deleteCount[, item1[, item2[, ...]]]])


//!sin terminar
function spliceCustom(array, start, borrar, ...elements) {
    for (let index = 0; index < elements.length; index++) {
        array.push(elements[index]);
        
    }    
    return array
};


const num = [1,2,3,20,4,5,6];
const splice = spliceCustom(num,2,20);
console.log("splice", splice);