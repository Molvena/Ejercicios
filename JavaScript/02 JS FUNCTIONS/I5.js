//Iteración 5 

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

let resultado = 0;
mixedElements.forEach((item, index) =>{
    if (isNaN(item) == true){
    resultado += item.length;
    }else{
      resultado += item;  
    }})
console.log(resultado);  // este da un numero erroneo  con el 10 entre comillas!!


let resultado3 = 0;
mixedElements.forEach((item, index) =>{
    if (isNaN(item) == false){
    resultado3 += item;
    }else{
      resultado3 += item.length;  
    }})
console.log(resultado); // este da un numero erroneo  con el 10 entre comillas!!

//con ternario

let resultado2 = 0
for(let z=0; z<mixedElements.length; z++){
    isNaN(z) == true? resultado2 += z.length: resultado2 += z;
}
console.log(resultado2); //ojo!! esto me da 36 porque las posiciones 0 no las cuenta y el 10  lo cuenta como string. 

//con function

function contar(array) {
  let resultado3 = 0
for(let b=0; b<array.length; b++){
    isNaN(b) == true? resultado3 += b.length: resultado3 += b;
}
console.log(resultado3);
}
  contar(mixedElements);

  //con arrow

  const contara = (array) => {
    let resultado3 = 0
  for(let b=0; b<array.length; b++){
      isNaN(b) == true? resultado3 += b.length: resultado3 += b;
  }
  console.log(resultado3);
  }
    contara(mixedElements);

    //promedio:

    const promedio = (array) => {
      let resultado4 = 0;
      for(let b=0; b<array.length; b++){
        isNaN(b) == true? resultado4 += b.length: resultado4 += b;
    }
    console.log(resultado4/array.length);
    }
    promedio(mixedElements);