import { useRef, useState } from 'react'

//Creamos un componente muy sencillo que tenga un input 
//y lo enlazaremos a una referencia e imprimiremos el valor. 
//Esto provocacará un nuevo renderizado solo 
//cuando invoquemos a printValue dandole al boton mostrar
//pero no a medida que voy escribiendo cada una de las letras en el input
// en lugar de hacerlo a cada cambio del input.

export const CodeUseRef = () => {
    const textInput = useRef(null);
    const [name, setName] = useState("Helen");
//useRef nos devuelve un objeto mutable con la unica propiedad: current
//A esa propiedad accedemos nombreVble.current
    const printValue = () => {
        const inputValue = textInput.current?.value;
        if(inputValue) setName(inputValue);
        console.log("Imprime nombre:", inputValue);
    };

  return (
    <div>
      <h1>Hola soy {name}</h1>
      <input type="text" placeholder='name' ref = {textInput}/>
      <button onClick={printValue}>Mostrar</button>
    </div>
  )
}
