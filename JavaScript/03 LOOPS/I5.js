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
const placesToTravel2 =[];
for(let n = 0; n < placesToTravel.length; n++) {  //ojo aqui se pone < No olvidar!!
  const destino = placesToTravel[n];
    if (destino.id !== 11 && destino.id !== 40){
    placesToTravel2.push(destino);
}
}

console.log(placesToTravel2);




