//Este no se aplicarlo, me falta la perte del fetch


import { useState } from "react"
import { useDebounce } from "../../Hooks/useDebounce";
import { useEffect } from "react";


export const Component = () => {
    const [value,setValue]=useState('');
    const debouncedValue = useDebounce(value, 500);

    const handleChange = (event) => {
        setValue(event.target.value)
    }
//Se refiere al valor del elemento que desencadenó el evento 
//si tienes un campo de entrada en un formulario 
//y quieres capturar el valor que el usuario ha escrito en ese campo cuando envían el formulario, 
//podrías usar "event.target.value" para obtenerlo.
  // Fetch API (optional)
    useEffect(() => {
      
    // Do fetch here...
    // Se activa cuando cambia "debouncedValue"
      }, [debouncedValue])

  return (
    <div>
      <p>Valor a tiempo real: {value}</p>
      <p>Valor debounced: {debouncedValue}</p>

      <input type="text" value={value} onChange={handleChange} />
    </div>
  )
}
