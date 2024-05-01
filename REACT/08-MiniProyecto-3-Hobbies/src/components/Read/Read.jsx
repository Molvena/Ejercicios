import "./read.css";

export const Read = ({id, titulo, autorN, autorS, genero, fechaP,fechaA,image}) => {
  return (
    <div className="libros">
        <h3>Título: {titulo}</h3>
        <h3>Nombre del Autor: {autorN}</h3>
        <h3>Apellido del Autor: {autorS}</h3>
        <h3>Género literario: {genero}</h3>
        <h3>Fecha de publicación: {fechaP}</h3>
        <h3>Fecha de nacimiento del Autor: {fechaA}</h3>
        <img className="booksImg" src={image} alt={titulo} />
        </div>
  )
}
