//Iteración 1

function sum (numberOne, numberTwo) {
    (numberOne>numberTwo)? console.log(numberOne): console.log(numberTwo);
}
let mayor =sum;
mayor(60, 34);

//Ahora con Arrow

const may = (numberOne, numberTwo) => (numberOne>numberTwo)? console.log(numberOne): console.log(numberTwo);
let alto = may;
may(67,22);

//Ahora con if

function alt(numberOne, numberTwo) {
    if(numberOne>numberTwo){
    console.log(numberOne)
    }else{console.log(numberTwo)
    };
}
let grande =alt;
grande(12,14);












//Iteración 4

const numbers2 = [12, 21, 38, 5, 45, 37, 6];
let parcial = 0;
let promedio = 0;
numbers2.forEach ((number, index) =>{
    parcial += number;
    promedio = (parcial / numbers2.length);
})
console.log (promedio);

