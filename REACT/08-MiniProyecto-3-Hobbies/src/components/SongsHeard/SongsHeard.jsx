import "./songsHeard.css";


export const SongsHeard = ({id, song, artist, genre}) => {
  return (
    <div className="Canciones">
        <h3>Nombre: {song}</h3>
        <h3>Autor: {artist}</h3>
        <h3>Género: {genre}</h3>
        </div>
  )
}
