import { useEffect, useState } from "react";

//hacemos un componente contador
//Le vamos a meter un useEffect para para esperar 
//que el estado se actualice en React
//Cada vez que cambia count se va a lanzar el console.log

export const Count = () => {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log('useEffect ran. count is: ', count)
    },[count])
    //se pueden añadir mas variables en el array de dependencias
    //y la función que pasa useEffect se ejecutara cada vez que cb las variables
    




  return (
    <div>
        <h2>Count:{count}</h2>
        <button onClick={()=>setCount(count + 1)}>Contador</button>      
    </div>
  )
}
