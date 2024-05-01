import "./languagesh.css"

export const Languagesh = (props) => {
  const {Lenguaje, index} = props
     return (
      <div key={index}>
        <h2>Language:{Lenguaje.language}</h2>
        <h2>WrLevel:{Lenguaje.wrlevel}</h2>
        <h2>SpLevel:{Lenguaje.splevel}</h2>
      </div>
    ); 
  };



  