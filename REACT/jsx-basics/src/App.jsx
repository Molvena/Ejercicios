import { useState } from 'react'

import './App.css'
import { EnlacesCustom } from './components'
import { dataRender } from './data/infoEnlacesCustom'

const App = () => {
  const [count, setCount] = useState(0);
  const [boolean, setBoolean] = useState(false);

  ///Renderiza “Buenos días” [6-12] , “Buenas tardes” [13-19] o “Buenas noches”[20-5] según el valor numérico asignado.
  const x = 5;
  const time = 
    x >= 6 && x < 12 
    ? "Buenos días" 
    : x >= 12 && x<20
    ?"Buenas tardes"
    : "Buenas noches";

   return (
    <>
   
      <div>
      {
          // En las llaves solo se puede hacer una linea de ejecucion no se puede ¡n meter seguidas una debajo de la otra
          // Se deben de meter otras llaves y ahi meter la ejecucion
          dataRender.map((item) => (
            <EnlacesCustom
              // no meter el INDEX como KEY
              key={JSON.stringify(item)}
              src={item.src}
              clase={item.clase}
              alt={item.alt}
              url={item.url}
            />
          ))
        }
       
        
      </div>
      <h1>{("Time", time)}</h1>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {console.log(count)}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div className="booleano">
      <button onClick={() => setBoolean((prevalue) => !prevalue)}>
           booleano{boolean}           
        </button>
        {boolean && <p>estoy en true</p>}
        {!boolean && <p>estoy en false</p>}

        {console.log(boolean)}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
