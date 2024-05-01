import "./moviesh.css"
  
export const Moviesh = (props) => {
  const {Pelicula, index} = props
     return (
      <div key={index}>
        <h2>Name:{Pelicula.name}</h2>
        <h2>Type:{Pelicula.type}</h2>
        <h2>Genre:{Pelicula.genre}</h2>
        <h2>Vote:{Pelicula.vote}</h2>
      </div>
    ); 
  };





  