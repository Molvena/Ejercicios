import React from "react";
import "./movie.css";

//Creamos el componente Movie.jsx en el que pintaremos el título y puntuación de la peli.
//Recibe dos props title y poster, siendo poster la ruta de la imagen
//De esta primera forma cada vez que cambio la puntuación
//se renderiza de nuevo toda la pagina, con la imagen etc
//Estamos renderizando el componente movie cada vez que cambia el estado
//y eso no es lo que queremos, ya que este componente no depende del valor de score



// export const Movie = ({title, poster}) => {
//     console.log("Renderizando Movie")
//   return (
//     <div>
//         <h3>{title}</h3>
//         <img src={poster} alt={title} width={200}/>
//     </div>
//   )
// };

//Si añadimos React.memo como envoltura de nuestro componente
// ya no se rerenderiza de nuevo al cambiar el valor del input
//No se rerenderiza si no cambia title y poster

export const Movie = React.memo(({title, poster}) => {
    console.log("Renderizando Movie");
  return (
    <div>
        <h3>{title}</h3>
        <img src={poster} alt={title} width={200}/>
    </div>
  );
});


//No abusar del React.memo porque puede que entonces el exceso de ellos
///haga que se pare mucho en la comprobación de las props
