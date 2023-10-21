
//Iteración 6

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];

  //con un bucle
  const sinRepetir = [];

  duplicates.forEach(
    (comida, index) =>
  !sinRepetir.includes(comida) && sinRepetir.push(comida));  // dos acciones:(1)coge los que no esten incluidos(2)metelos al final
  
  console.log(sinRepetir);

//con function

function unicos (list){
  const listado =[];
  list.forEach((item,index)=>
  !listado.includes(item) && listado.push(item));
  console.log(listado);
}
unicos(duplicates);

// con Arrow

const unicos2 = (list) =>{
  const listado =[];
  list.forEach((item,index)=>
  !listado.includes(item) && listado.push(item));
  console.log(listado);
}
unicos2(duplicates);