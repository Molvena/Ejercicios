// Ejercicio 1: Contador con useState
// Objetivo: Crear una aplicación de contador que permita a los usuarios
// incrementar, decrementar y resetear un contador.
// Descripción:
// Crea un nuevo componente llamado Contador.
// Utiliza useState para manejar el estado del contador.
// Agrega botones para incrementar, decrementar y resetear el contador.
// Muestra el valor actual del contador en el UI

import { useState } from "react"



export const Contador = () => {
    const [count, setCount] = useState(0);
    console.log(count);
  return (
    <div>
        <h4>{count}</h4>
        <button onClick={() =>setCount(count+1)}>Suma 1</button>       
        <button onClick={() =>setCount(count-1)}>Resta 1</button>
        <button onClick={() =>setCount(0)}>Reseteo</button>
    </div>
  )
}

 
