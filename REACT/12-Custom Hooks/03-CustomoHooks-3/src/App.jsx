

import './App.css'
import useFetch from './components/useFetch/useFetch';
import { useToggle } from './components/useToggle/useToggle';

function App() {
  const[toggleState, handleToggle] = useToggle();
  const { data, error, loading } = useFetch(
    "https://pokeapi.co/api/v2/pokemon/ditto"
  );
  if (loading) return <p>Esta cargando</p>;
  if (error) return <p>Esta roto</p>;
  console.log("🚀 ~ App ~ data:", data);


  return (
    <>
    <div>
      <h3>Toggle: {toggleState.toString()}</h3>
      <button onClick={handleToggle}>Toggle</button>
      {console.log(toggleState.toString())}
    </div>
    <div>
    <p>{JSON.stringify(data)}</p>

    </div>
      
    </>
  )
}

export default App
