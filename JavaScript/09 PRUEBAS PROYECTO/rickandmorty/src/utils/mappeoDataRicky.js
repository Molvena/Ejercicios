import { getAll } from "../services/rickyApi.service";

export const mappeoData = async ()=>{
   const rawData = await getAll();
   return rawData.results.map((item) =>({
    name:item.name,
    image:item.image,
   }))

}

//Los datos obtenidos en getAll 
//son muchos objetos con muchos datos cada uno
//Aqui voy a quedarme solo con los datos que quiero tener
//en este caso seran los nombres y las imagenes de cada uno de ellos
//De todos los datos obtenidos cojo la patrte de results
//que es una parte de la API, puede llamarse de otra forma, hay que mirarlo
//Estos datos los guardare en una funcion mappeoData
//que me exportare a la pagina en la que los quiero pintar, es decir en la HOME en este caso
//Como antes quiero configurar unas cartas con un formato determinado
//me voy al archivo Figure y alli creare la funcion 
//y después me ire al home e importare mappeoData y PrintFigureRicky 