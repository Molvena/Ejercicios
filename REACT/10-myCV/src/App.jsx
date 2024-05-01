import { useState } from 'react';
import './App.css';
import { CV } from './Cv/Cv';
import { About, Education, Experience, Hero, More } from './components/index';

//Realizamos un destructuring de la const CV para poder acceder a hero, education....directamente
const { hero, education, experience, languages, habilities, volunteer } = CV;

export const App = () => {
  const [showEducation, setShowEducation] = useState(true);
  const [showMore,setShowMore] = useState (false);

  return (
    <div className="App">
      <Hero hero={hero}/>
      <About hero={hero}/>
    {/* Creo un boton que al pulsarlo setee showEducation y lo ponga en true*/}
      <button className='custom-buttom-4'
      onClick={()=>setShowEducation(true)}
      >
        EDUCATION
      </button>
      {/* Creo otro boton que al pulsarlo setee showEducation y lo ponga en false */}
      <button className='custom-buttom-4'
      onClick={()=>setShowEducation(false)}
      >
        EXPERIENCE
      </button>
{/* Pongo las condiciones en un ternario cuando showEducation es true y cuando es  false
Cuando es true llamo a <Education/> y cuando es false llamo a <Experience/>  */}
      <div>
        {showEducation?(
          <Education education={education} />
        ) : (<Experience experience={experience}/>
        )}
      </div>
{/* Ahora creo un boton que al pulsarlo me modifique el valor de showMore al contrario*/}
      <button className='custom-buttom-5'
      onClick={()=>setShowMore(!showMore)}
      >
        MORE
      </button>
      {/* Ahora le digo que cuando showMore sea true me muestre el contenido de <More/> */}
      <div>
        {showMore&&(<More 
      languages={languages}
      habilities={habilities}
      volunteer={volunteer}      
      />)
    }
      </div>  

    </div>
  )
}


       