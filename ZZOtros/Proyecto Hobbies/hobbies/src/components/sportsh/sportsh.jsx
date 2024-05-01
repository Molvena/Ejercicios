import "./sportsh.css"
  
export const Sportsh = (props) => {
  const {Deporte, index} = props
     return (
      <div key={index}>
        <h2>Name:{Deporte.name}</h2>
        <h2>Indoor:{Deporte.indoor}</h2>
        <h2>Favorite Team:{Deporte.favoriteTeam}</h2>
      </div>
    ); 
  };





  