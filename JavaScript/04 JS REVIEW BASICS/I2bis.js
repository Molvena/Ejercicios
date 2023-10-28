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

let volumenes = [];

for (let user of users){
    const{favoritesSounds} =user; //estoy definiendo el objeto como variable porque hasta ahora era una clave
   for (let sonido in favoritesSounds){
    //console.log(sonido);
volumenes.push(favoritesSounds[sonido].volume);
//console.log(volumenes);
   }
}

const sum = volumenes.reduce((acc,num)=> acc + num, 0);
//console.log(sum);

let media = sum/volumenes.length;
console.log(media);