import "./FigurePokemon.css";

const template =(name,id,image,type, height, weight) =>`
<figure  class="${type[0].type.name} figurePokemon "  id=${id}>
<img class="imagePokemon" src=${image} alt=${name}/>
<h2>${name}</h2>
<p> ID:${id}   Altura:${height}cm</p>
<p> Peso:${weight}gr </p>

</figure>
`


//Le doy una clase a todas las figure igualpara poder maquetarlas
//Le doy una clase dinamica con ${} para poder clasificarlos por tipos
//Cuando queremos meter mmás de una clase lo metemos entre comillas y 
//lo separamos por espacios


export const PrintFigurePokemon = (name, id, image, type, height, weight) => {
    document.getElementById("galleryPokemon").innerHTML +=template(
        name,
        id,
        image,
        type,   
        height,
        weight
    );
}

//galleryPokemon es el id del div del template de la página de pokemon
//Que es donde voy a pintar la galería
//Despues lo pasamos por el archivo de barril y lo llamo desde la página de pokemon