import "./peliculas.css";

export const Peliculas = ({id, nombre,tipo,genero,puntuacion}) => {
  return (
    <div className="pelis">
        <h3>Nombre: {nombre}</h3>
        <h3>Tipo: {tipo}</h3>
        <h3>Género: {genero}</h3>
        <h3>Puntuación: {puntuacion}</h3>
    </div>
  )
}
