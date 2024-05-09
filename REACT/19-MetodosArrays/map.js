//El método map() crea un nuevo array con los resultados
// de la llamada a la función indicada aplicados a cada uno de sus elementos.

//sintaxis
//var nuevo_array = arr.map(function callback(currentValue, index, array) {
    // Elemento devuelto de nuevo_array
//}[, thisArg])

//Creo el array resultado
//Para cada elemento del array aplico la callback

function mapCustom(array, callback) {
    const resultado = []
    for (let index = 0; index < array.length; index++) {
        resultado[index]=callback(array[index], index, array)        
    }
    return resultado
    }

    const num = [1,4,6,7,8,10]

    const mapeados = mapCustom(num,(item, index, array)=>item+2);

    console.log(mapeados);