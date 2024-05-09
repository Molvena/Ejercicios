//El método concat() se usa para unir dos o más arrays. 
//Este método no cambia los arrays existentes, sino que devuelve un nuevo array

//var nuevo_array = viejo_array.concat(valor1[, valor2[, ...[, valorN]]])

// function concatCustom(array, ...elements) {
//     const resultado = [];
//     for (let index = 0; index < array.length; index++) {
//         resultado.push(array[index]);
//     }
//     elements.forEach(element => {
//     for (let index = 0; index < element.length; index++) {
//         resultado.push(element[index]);
//         //resultado[resultado.length] = elements[index]        
//     }
// });
//     return resultado
// };

function concatCustom(...arrays) {
    const resultado = [];
    for (let i = 0; i < arrays.length; i++) {
        const currentArray = arrays[i];
        for (let j = 0; j< currentArray.length; j++) {
            resultado.push(currentArray(j));
            }
        }

    return resultado
}
//!corregir/


const num = [1,4,6,7,8,10];
const num2 = [3,12];
const num3 = [1,9];

const concatenados = concatCustom(num,num2, num3);

console.log(concatenados);
