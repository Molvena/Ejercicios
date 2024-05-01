import "./songsheardh.css" 

export const Songsheardh = (props) => {
  const {Cancion, index} = props
     return (
      <div key={index}>
        <h2>Song:{Cancion.song}</h2>
        <h2>Artist:{Cancion.artist}</h2>
        <h2>Genre:{Cancion.genre}</h2>
      </div>
    ); 
  };




