let myFavoriteHero ="Hulk";
let x = 50;
let h = 5;
let y = 10;
let z = x + y;

console.log (z);

/// interaccion 2

const character = {name: 'Jack Sparrow', age: 10};
character.age = 25;
 
console.log (character);

let firstName ="Jonh";
let lastName = "Snow";
let age = 24;

console.log (`Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos`);

const toy1 = {name: "Buss myYear", price: 19};
const toy2 = {name: "Rallo mcKing", price: 29};

console.log (toy1.price + toy2.price);

let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
globalBasePrice =25000;

car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice = car2.basePrice + globalBasePrice;
console.log (car1.finalPrice);
console.log (car2.finalPrice);


///Interaccion 3

let a = 10;
let b = 5;
let e = a + b;
console.log (e)
let d = 2;
console.log(a/2);
console.log(15/9);
let p =10;
let j = 5;
let o = p+j;
console.log(o)
let c = 10;
let m =5;
let i = c*m;
console.log(i);

//Interaccion 4

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log (avengers[0]);
avengers.shift();
avengers.unshift("IRONMAN");
console.log (avengers);
console.log (avengers.length);

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.unshift("Morty","Summer");
console.log(rickAndMortyCharacters);

rickAndMortyCharacters.push("Morty","Summer");
rickAndMortyCharacters.splice(0,2);
console.log(rickAndMortyCharacters);
rickAndMortyCharacters[5] = "Lapiz Lopez";
console.log(rickAndMortyCharacters);
///AHORA YA TENGO EL ARRAY QUE ME PIDEN

rickAndMortyCharacters.pop;
rickAndMortyCharacters.pop();
console.log(rickAndMortyCharacters);
console.log (rickAndMortyCharacters[0]);
console.log (rickAndMortyCharacters[4]);
rickAndMortyCharacters.splice(1,1);
console.log(rickAndMortyCharacters);