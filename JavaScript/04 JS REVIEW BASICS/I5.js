//**teración #5: Función rollDice**

//Crea una función llamada **rollDice()** que reciba como parametro
// el numero de caras que queramos que tenga el dado que deberá simular
// el codigo dentro de la función. Como hemos dicho, que la función use 
//el parametro para simular una tirada de dado y retornar el resultado. 
//Si no se te ocurre como hacer un numero aleatorio no te preocupes! 
//busca información sobre la función de javascript **Math.random()**

const rollDice = (numCaras) =>{
    return Math.floor(Math.random() *(numCaras -1 +1) + 1)  //el -1 y el +1 seran los minimos.Son formulas matematicaspara que saque el rango

const dado = rollDice(5);//no te puede dar mas de 5

console.log(dado);


//te da un resultado aleatorio