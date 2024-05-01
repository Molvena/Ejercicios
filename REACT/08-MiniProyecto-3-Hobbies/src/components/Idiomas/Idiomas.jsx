import "./idiomas.css";

export const Idiomas = ({id,idioma, wrlevel,splevel}) => {
  return (
      <div  className="idiomas">
        <h3>Nombre: {idioma}</h3>
        <h3>Nivel Escrito:{wrlevel}</h3>
        <h3>Nivel Hablado{splevel}</h3>
      </div>
  )
}
