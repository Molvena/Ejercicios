import "./Figure.css"

const template = (imageFigure,nameFigure) =>`
<figure>
<img src=${imageFigure} alt=${nameFigure}>
<h3>${nameFigure}</h3>
</figure>
`;

export const PrintFigureRicky = (name, image) =>
  (document.getElementById("containerHomePage").innerHTML += template(
    image,
    name
  ));

//console.log(PrintFigureRicky);
  //Este template lo voy a inyectar en el contenedor de la pagina Home
  //en el que voy a definir una seccion <div> con id containerHomePage
