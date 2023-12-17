import "./Figure.css"

const template = (imageFigure,nameFigure) =>`
<figure>
<img src=${imageFigure} alt=${nameFigure}>
<h3>${nameFigure}</h3>
</figure>
`;

export const PrintFigurePokemon = (name, image) =>
  (document.getElementById("containerPokePage").innerHTML += template(
    image,
    name
  ));

//console.log(PrintFigurePokemon);
  //Este template lo voy a inyectar en el contenedor de la pagina Pokemons
  //en el que voy a definir una seccion <div> con id containerPokePage


