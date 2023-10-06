const character = {name: 'Jack Sparrow', age: 10};
character.age = 25;
console.log (character);


let firstName = "Jon";
let lastName = "Snow";
let age = "24";
console.log (`Soy ${firstName}, tengo ${age} años y me gustan los lobos.`)

const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
console.log (toy1.price + toy2.price);

let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
globalBasePrice = 25000;
car1.finalPrice = (car1.basePrice + globalBasePrice);
console.log (car1.finalPrice);


let x = 10;
let y = 5;
console.log (x*y);

let a = 2;
console.log (x/a);

let b = 15;
let d = 9;
console.log (b%d);

let p = 10;
let j = 5;
const o = (p+j);
console.log (o);

let c = 10;
let m = 5;
const i = (c*m);
console.log (i);


