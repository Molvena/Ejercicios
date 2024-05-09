import React from 'react'
import { useCallback, useState } from "react";

//En este componente aplicamos useCallback a nuestras funciones handleClick
//y envolvemos nuestro Button en React.memo (línea 9)
//Las funciones que antes estaban en las líneas 28 y 29
//ahora estan en la 23,24  metidas en un useCallback


 const ButtonConUC = React.memo(({handleClick, name}) => {
    console.log(`${name}rendered`)
  
    return (
      <button onClick={handleClick}>{name}</button>
    )
  })
  
  export const CounterConUC = () => {
    console.log('counterConUC rendered')
      const [countOne, setCountOne] = useState(0)
      const [countTwo, setCountTwo] = useState(0)
      const memoizedSetCountOne = useCallback(() => {setCountOne(countOne + 1)},[countOne],)
      const memoizedSetCountTwo = useCallback(() => {setCountTwo(countTwo + 1)},[countTwo],)
      
      return (
        <>
          {countOne} {countTwo}
          <ButtonConUC handleClick={memoizedSetCountOne} name="button1" />
          <ButtonConUC handleClick={memoizedSetCountTwo} name="button2" />
        </>
      )
    };
    ButtonConUC.displayName = 'ButtonConUC';
    
  export default ButtonConUC