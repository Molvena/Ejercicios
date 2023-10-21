
//Iteración 3


const numbers = [1, 2, 3, 5, 45, 37, 58];
let total = 0;

//con for

for(let num = 0; num < numbers.length; num++){
total += numbers[num];
}
console.log(total);

//con forEach

let suma = 0;
numbers.forEach ((number,index) => {
suma += number;
});

console.log(suma);

// con function

function sumar (array) {
    let resultado =0;
    array.forEach((item,index)=> resultado += item);
    console.log(resultado);

}
sumar(numbers);

// con arrow

const sumar2 = (array) =>{
    let resultado =0;
    array.forEach((item,index)=> resultado += item);
    console.log(resultado);
}
sumar2(numbers);