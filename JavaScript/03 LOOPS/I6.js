
//Iteración #6: Mixed For...of e include
//Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato. 
//Recuerda que puedes usar la función .includes() para comprobarlo.Puedes usar este array:

const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ]

const toysSinGato =[];                      //nueva variable donde guardo resultados
for(let personaje of toys){                 
 if(!personaje.name.includes("gato")){
 toysSinGato.push(personaje);
   }
}
console.log(toysSinGato);
