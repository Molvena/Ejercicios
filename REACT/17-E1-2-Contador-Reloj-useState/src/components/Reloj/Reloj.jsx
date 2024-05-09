// Ejercicio 2: Reloj en tiempo real con useEffect
// Objetivo: Crear un componente que muestre la hora actual que se actualice cada segundo.
// Descripción:
// Crea un nuevo componente llamado Reloj.
// Utiliza useState para almacenar la hora actual.
// Usa useEffect para actualizar la hora cada segundo.
// Asegúrate de limpiar el intervalo cuando el componente se desmonte.

import { useEffect, useState } from "react"



export const Reloj = () => {
    
    const [time, setTime] = useState();   

//Definimos un useEffect que recoge la hora local a traves de una función
//y la ejecute tanto al cargar la página 
//como al pasar a través del intervalo de un segundo (1000 milisegundos).
//La constante date recoge la información de la hora local a través del método
// predeterminado date.toLocaleTimeString() 
//y el valor recogido será el que se aplique
// a time mediante setTime cada 1000 milisegundos(un segundo).

        useEffect(() => {
            setInterval(()=>{
                const date =new Date();
                setTime(date.toLocaleTimeString());
            }, 1000)  
            //Si pusiera solo esto de mas abajo me sale la hora, pero tengo que 
            //recargar la página para que me la actualice
            // const date =new Date();
            // setTime(date.toLocaleTimeString());
        }, []);        

  return (
    <>
    <div>
        <h1>{time}</h1>
    </div>

  </>
  )
};

//ahora en el return de esta función tendremos que hacer un renderizado condicional
//que dependera del valor de dismount y se controlara mediante un boton
//el desmontaje se controla en el return
export const Montar = () => {
    const [dismount, setDismount] = useState(false);
    console.log(dismount)
 
    return (
      <>
        <div>
          {!dismount&&<Reloj/>}

        </div>

        <div>           
          <button onClick={() => setDismount((value) => !value)}>
            MONTAR O DESMONTAR RELOJ
          </button>
        </div>   
     </>
  )
};

