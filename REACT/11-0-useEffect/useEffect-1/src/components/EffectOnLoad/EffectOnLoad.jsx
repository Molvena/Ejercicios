import { useEffect, useState } from 'react'

export const EffectOnLoad = () => {
    const [myName, setMyName] = useState("Helen");

    useEffect(()=>{
        setTimeout(()=>{
            setMyName("Ziggy Stardust");
        },3000);
    },[]);
    
    //el useEffect tiene dos parametros 
    //El primero es un código que se ejecuta cuando es llamadoen forma de callback
    //no debe ser una función async/await, 
    //pero si que pueden serlo las funciones declaradas en su interior
    //El segundo un array de dependencias que queremos escuchar

  return (
   <>
    <h4>{myName}</h4>
    <input
    type="text"
    value={myName}
    onChange={(e) => setMyName(e.target.value)}
    />
   </>
  )
}
