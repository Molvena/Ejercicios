//Iteración #4: Map

//4.1 Dado el siguiente array, devuelve un array con sus nombres 
//utilizando .map().

const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const usersNames = users.map(user => user.name);
console.log("🚀 ~ file: I4:14 ~ usersNames:", usersNames);



//4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
//de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
//empiece por 'A'.

const users2 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const names = users2.map(user=>{
        if(user.name.startsWith("A")){
       return {...user, name:"Anacleto"};
    }else{
        return {...user};
    }})//.map(user => user.name); tambien funciona así
    
const anacletos = names.map(user => user.name);

console.log("🚀 ~ file: I4:30 ~ names:", anacletos);

//4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
//de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
//cuando el valor de la propiedad isVisited = true.

const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];


const names2 = cities.map(city=>{
    if(city.isVisited==true){
return{...city, name:city.name + " is Visited"}
    }else{
        return{...city}
    }
})//.map(city=>city.name); tambien funciona así

const visitados = names2.map(city=>city.name);

console.log("🚀 ~ file: I4:53 ~ names2 :", visitados)
