//devuelve una copia de una parte del array dentro de un nuevo array 
//empezando por inicio hasta fin (fin no incluido).
//El array original no se modificará.

//sintaxis: arr.slice([inicio [, fin]])


function customSlice(array, inicio, fin ) {
    const newArray = [];
    // Ajustar end si no se proporciona o es mayor que la longitud del array
    fin = fin || array.length;
    if (fin > array.length) {
        fin = array.length;
    }


    for (let index = inicio;  index < fin; index++) {
        newArray.push(array[index]);
    }
    return newArray
};

const num = [1,2,3,20,4,5,6];
const slice = customSlice(num,2,20);
console.log("slice", slice);


