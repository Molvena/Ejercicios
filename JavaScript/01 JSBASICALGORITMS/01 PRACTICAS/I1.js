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

//Interaccion 5
const number1 = 10;
const number2 = 20;
const number3 = 2;

if (number1 === 10){
    console.log("number1 es igual a 10");
} 
if (number2/number1 == 2){
    console.log("number2 dividido entre number1 es igual a 2");
}
if (number1 !== number2){
    console.log("number1 es estrictamente distinto a number2"); 
}
if (number3 != number1){
    console.log("number3 es distinto number1");
}
if (number3*5 == number1){
    console.log("number3 por 5 es igual a number1");
}
if (number3*5 == number1 && number1*2 == number2){
    console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}
if (number2/2 ==number1 || number1/5 == number3){
    console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}


(number2/number1 == 2)?console.log("number2 dividido entre number1 es igual a 2"):console.log();

(number2/number1 == 5)?console.log("number2 dividido entre number1 es igual a 2"):console.log();

//Interaccion 6

for (let a = 0; a<=9; a++){
console.log(a);
}
for (let b = 0; b<=9; b++){
    if (b% 2 == 0){
    console.log (b);
    } 
}

for (let c =0; c<10; c++){
    if (c<9){
        console.log ("Intentando dormir");
    }else{
        console.log ("Dormido!");
    }
}


//Interaccion 6 bis

for(let x=0; x<=9; x++){
    console.log(x)
}

for (let y=0 ; y<=9; y++){
    if (y%2 ===0){
        console.log(y);
    }
}

// Si quiero que me saque todos los pares mayor que 2
//esto  a continuación me ha creado un bucle infinito

//for (let y=0 ; 2<y<=9; y++){
//   if (y%2 ===0){
//      console.log(y);
//  }
//  }

//Asi sí funciona

for (let z=0 ; z<=9; z++){
    if (z%2 ===0 && z>2){
        console.log(z);
    }  
    }

for (let h = 0; h<10; h++){
    if (h < 9) {console.log("Intentando dormir");
}else {console.log("Durmiendo");}
}

//con ternario

for (let w = 0; w<10; w++){
    w<9? console.log ("Intentando dormir"): console.log("durmiendo");
}