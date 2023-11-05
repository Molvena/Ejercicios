//Iteración #3: Mix Fors
//Dado el siguiente javascript usa forof y forin para saber cuantas veces 
//ha sido cada sonido agregado por los usuarios a favorito.
// Para ello recorre la lista de usuarios y usa forin 
//para recoger el nombre de los sonidos que el usuario tenga como favoritos.
//Una vez accedas a ellos piensa en la mejor forma de hacer un conteo 
//de cada vez que ese sonido se repita como favorito en cada usuario.

//Este ejercicio es un poco complicado con los conocimientos actuales pero...
//a la vez un buen reto y oportunidad para comprender que hay muchas formas de hacer las cosas en javascript.

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

let favoritos =[];


for(let user of users){
//console.log(user);
const {favoritesSounds} =user  //destructuring
//console.log(favoritesSounds);
//console.log(user);

for(let sonido in favoritesSounds){
    favoritos.push(sonido);  
    
}
};
//console.log(favoritos);

//[
 //  'waves',    'rain',
 //  'firecamp', 'waves',
 //  'shower',   'train',
 //  'shower',   'train',
 //  'firecamp', 'waves',
 //  'wind',     'firecamp'
 // ]


const resultado =[]; // Va a tener este formato {sound: sonido, repeticiones: acc}

for(let sonido of favoritos) { //estos son los sonidos del array favoritos , les hago un bucle
    let acc =0; //declaro el contador a cero

resultado.forEach((sonidoContado,index)=>{ //este es un bucle del resultado, voy a comparar un array con el otro
    sonidoContado.sound == sonido  && acc++ //cojo el primer sonido de favoritos  si ya tengo ese sonido en resultado
    })                                      // (sonidoContado es cada objeto del array resultado, el sonido seria sonidoContado.sound), 
                                            //le sumo uno y acabo.Y voy a por el segundo sonido (firecamp) 
                                          //Si no está, me cumple la siguiente condicion (contador a cero) y entonces lo cuento
                                            //El primer bucle me opera si  esta contado, pero si no, no hace nada. estoy parado.

                                           // { sound: 'waves', repeticiones: 0 },
                                            //{ sound: 'rain', repeticiones: 0 },
                                            //{ sound: 'firecamp', repeticiones: 0 },
                                            //{ sound: 'waves', repeticiones: 1 },
                                            //{ sound: 'shower', repeticiones: 0 },
                                           //{ sound: 'train', repeticiones: 0 },
                                            //{ sound: 'shower', repeticiones: 1 },
                                            //{ sound: 'train', repeticiones: 1 },
                                            //{ sound: 'firecamp', repeticiones: 1 },
                                            //{ sound: 'waves', repeticiones: 2 },
                                            //{ sound: 'wind', repeticiones: 0 },
                                            //{ sound: 'firecamp', repeticiones: 2 }





    if (acc == 0){                             
        for(let elementoNoContado of favoritos){   //Para ponerme a contar de nuevo, tengo que hacer otro bucle, recorro el array favoritos de nuevo para poder contarlo 
     sonido ==elementoNoContado && acc++;           //y le digo que me iguale el nombre y me lo ponga en 1.
};

resultado.push({sound: sonido, repeticiones: acc});
}};
    
    
console.log(resultado);

//Ahora con un solo bucle

const users2 = [
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


const allSounds = []; //tendra la estructura {name: clave, repeticiones: acc}

let acc = 0;

for (let usuario of users2){                           //recorro cada objeto del primer array(users2)
    for(let clave in usuario.favoritesSounds){         //dentro de cada objeto recorro las claves del favoritesSound (for in)
        let accRepeticionesContado = 0;                //pongo el contador a cero de los repetidos
        allSounds.forEach((elementoContado,index)=>{   //recorro el array resultados  (allsounds) con forEach para aplicarle una accion
            clave === elementoContado.name && accRepeticionesContado ++
        });                 
          if(accRepeticionesContado == 0){
            acc = 0;
            for (let usuarioContar of users2){
                for(claveContar in usuarioContar.favoritesSounds){
                    clave === claveContar && acc++
                }
            }
            allSounds.push({name:clave, repeticiones:acc});
          }


          

    }
}



//console.log("🚀 ~ file: I3.js:142 ~ allSounds:", allSounds);


