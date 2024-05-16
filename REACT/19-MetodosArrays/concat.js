//El método concat() se usa para unir dos o más arrays. 
//Este método no cambia los arrays existentes, sino que devuelve un nuevo array

//var nuevo_array = viejo_array.concat(valor1[, valor2[, ...[, valorN]]])

//declaramos el nuevo array const resultado
//hacemos un bucle del array de arrays en el que defimos currentArray
//que sera el array que estemos recorriendo en el segundo bucle
//y dentro de cada array, hacemos otro bucle para recorrer cada elemento
//a cada uno de ellos le hago un push para meterlo en el nuevo array
    // [
    //     [1,2,3],
    //     ['hola', 'adios'],
    //     ['buenos', 'dias']
    // ]


function concatCustom(...arrays) {
    const resultado = [];
    for (let i = 0; i < arrays.length; i++) {
        const currentArray = arrays[i];
        for (let j = 0; j< currentArray.length; j++) {
            resultado.push(currentArray[j]);
            }
        }

    return resultado
}



const num = [1,4,3];
const num2 = ['hola', 'adios'];
const num3 = ['buenos', 'dias'];

const concatenados = concatCustom(num,num2, num3);

console.log(concatenados);
