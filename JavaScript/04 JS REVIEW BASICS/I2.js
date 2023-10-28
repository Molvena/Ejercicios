//Iteración #2: Mix Fors
//Dado el siguiente javascript usa forof y 
//forin para hacer la media del volumen de 
//todos los sonidos favoritos que tienen los usuarios.

const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

let volumeTotal = 0;

let longitud = [];

for (let user of users){
//console.log(user);
const{favoritesSounds} = user;
//console.log("favoritesSounds",favoritesSounds);
for (let sonidos in favoritesSounds){
//console.log("sonidos" ,sonidos);
//console.log(favoritesSounds[sonidos].volume);
volumeTotal += favoritesSounds[sonidos].volume;
//console.log(volumeTotal);
longitud.push(sonidos);
//console.log(longitud);
}}

let promedio = volumeTotal/longitud.length;
console.log(promedio);

//personaje
//{name: 'El culebra',favoritesSounds: {
  //  waves: {format: 'mp3', volume: 67},
    //wind: {format: 'ogg', volume: 35},
    //firecamp: {format: 'mp3', volume: 60},
//}
//},



//for(let personaje of users){
  //  let totalVolume = 0;
  //  for(let sonido in personaje.favoritesSounds){
           //  totalVolume += personaje.favoritesSounds[sonido].volume;
           //  console.log(totalVolume);   
           // }
        //let mediaVolume = totalVolume/totalVolume.lenght;
      // console.log(mediaVolume);
      //  }      


