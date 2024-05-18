//El método splice
//cambia el contenido de un array 
//eliminando elementos existentes y/o agregando nuevos elementos.

//Sintaxis
//array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
//parametros:
//start: Índice donde se comenzará a cambiar el array (con 0 como origen)
//deleteCount Opcional: Un entero indicando el número de elementos a eliminar del array antiguo.
//item1, item2, ... Opcional: Los elementos que se agregarán al array, empezando en el índice start. 
//Si no se especifica ningún elemento, splice() solamente eliminará elementos del array.

//Paso 1: hacer un array nuevo
//Paso 2: meter en el array nuevo los elementos antes del start
//Paso 3: meter en el array nuevo los elementos "elements"
//Paso 4:meter en el array nuevo los elementos de la cola del array
//Paso 5:Igualar el array al array nuevo, 
//para ello antes tengo que igualr la longitud del array a la de resultado

function spliceCustom(array, start, borrar, ...elements) {
    const resultado = [];

    //si quiero sacar los eliminados
    // const eliminados = array.slice(start,start+borrar);
    // console.log("eliminados",eliminados);
    
    for (let index = 0; index < start; index++) {
        resultado.push(array[index]);                
    };
    for (let index = 0; index < elements.length; index++) {
        resultado.push(elements[index]);
    };
    for (let index = start+borrar; index < array.length; index++) {
        resultado.push(array[index]);                
    };
    array.length=resultado.length;
    for (let index = 0; index < array.length; index++) {
         array[index]= resultado[index];
        
    }
         return array
};


const num = [1,2,3,20,4,5,6,1,5,9,7,8,4];
const splice = spliceCustom(num,2,5,5,7,9);
console.log("splice", splice);

//esperado [  1, 2, 5, 7, 9, 1, 5, 9, 7, 8, 4]