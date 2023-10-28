//Iteración #5: Probando For
//Usa un bucle for para recorrer todos los destinos del array 
//y elimina los elementos que tengan el id 11 y 40.
// Imprime en un console log el array. Puedes usar este array:

const placesToTravel = [
    {id: 5, name: 'Japan'}, 
    {id: 11, name: 'Venecia'}, 
    {id: 23, name: 'Murcia'}, 
    {id: 40, name: 'Santander'}, 
    {id: 44, name: 'Filipinas'}, 
    {id: 59, name: 'Madagascar'}
];

//bucle
const placesToTravel2 =[];                        //esta es la nueva variable donde guardo los resultados
for(let n = 0; n < placesToTravel.length; n++) {  //ojo aqui se pone < No olvidar!! con esto recorro cada elto del array
  const destino = placesToTravel[n];              //Defino la variable destino que son cada objeto dentro del array
    if (destino.id !== 11 && destino.id !== 40){  //pongo la condicion a destino que es cada objeto del array
    placesToTravel2.push(destino);                 //mando a la nueva matris lo que cumple la condición 
}
}

console.log(placesToTravel2);




