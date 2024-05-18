// El método filter() crea un nuevo array 
// con todos los elementos que cumplan la condición implementada por la función dada.

//sintaxis
//var newArray = arr.filter(callback(currentValue[, index[, array]])[, thisArg])


 function filterCustom(array, callback) { // words.filter((word) => word.length > 6);
  const resultado =[];
  for (let index = 0; index < array.length; index++) {
    if(callback(array[index],index,array))
    resultado.push(array[index]);
  }
    return resultado
 };
    
 const arrNums = [1,4,6,7,8,10];
 
 const filtrados = filterCustom(arrNums, (item, index, array)=>item > 6);
 
 
 console.log(filtrados);


