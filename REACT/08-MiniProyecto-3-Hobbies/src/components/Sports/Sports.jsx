import "./sports.css"

export const Sports = ({id, name, indoor, favoriteTeam}) => {
  return (
    <div className="sports">
        <h3>Nombre: {name}</h3>
        <h3>Indoor: {indoor}</h3>
        <h3>Equipo Favorito: {favoriteTeam}</h3>
    </div>
  )
}
