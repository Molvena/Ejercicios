import "./readh.css"
  
export const Readh = (props) => {
  const {Libro, index} = props
     return (
      <div key={index}>
        <h2>Title:{Libro.title}</h2>
        <h2>Genre:{Libro.genre}</h2>
    
 
            <img src={Libro.bookImage}/>
      
 
      </div>
    ); 
  };





  