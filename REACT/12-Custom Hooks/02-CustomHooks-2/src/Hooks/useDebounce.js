
//Queremos controlar todos los renders provocados por un cambio de state
// o que queremos controlar el número de peticiones que se lanzan en un buscador o filtro. 
//Podemos crear nuestro Custom Hook para que solo se lancen los renders o las peticiones cada 200ms.
//Tenemos un Hook en el que le entra el valor de control(value)
// y como segundo argumento el tiempo de espera(delay), en caso de no pasarlo será 200ms, 
//después con un setTimeOut controlamos el valor de entrada.

import { useEffect, useState } from "react"

export const useDebounce = (value,delay) => {
  const [debouncedValue, setDebouncedValue] = useState();

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay|| 200);
  
    return () => {
      clearTimeout(timer)
    }
  }, [delay,value])
  
  return  debouncedValue
  
}

//Código del timeOut
// setTimeout(() => {
  
// }, timeout);