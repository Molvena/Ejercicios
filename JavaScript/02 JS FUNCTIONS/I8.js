//Iteration #8: Contador de repeticiones
//Crea una función que nos devuelva el número de veces 
//que se repite cada una de las palabras que lo conforma.  
//Puedes usar este array para probar tu función:


const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code',
];


const repeatCounter =(param) =>{
  let num = 0;
  const resultado ={};
  
 param.forEach((item,index)=>{
  console.log(resultado); //esto es solo para ver como se va recorriendo el bucle. Es interesante
  resultado.hasOwnProperty(item) ? resultado[item] += 1:resultado[item] = 1});
  console.log("resultado final", resultado);
}

repeatCounter(counterWords);

// .hasOwnProperty() es un método de los objetos 
//los meto con resultado[item] porque es la forma de llamar al objeto.

