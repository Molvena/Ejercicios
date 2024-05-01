import { useEffect, useState } from "react";
import React from 'react'
import "./digitalClock.css";


export const DigitalClock = () => {
//tenemos que definir useState para que nos setée la hora a través de una función
    const [clockState, setClockState]= useState();
// y tambien tenemos que definir un useEffect que nos recoja la hora local a través de una función
// y la ejecute tanto al cargar la página como al pasar a través del intervalo de un segundo (1000 milisegundos).
//La constante date recoge la información de la hora local a través del método predeterminado
// date.toLocaleTimeString() y el valor recogido será el que se aplique
// a clockState mediante setClockState cada 1000 milisegundos (un segundo).

    useEffect(() => {
     setInterval(() => {
        const date = new Date();
        setClockState(date.toLocaleTimeString());
     }, 1000);
    
    }, [])
    
//Este useEffect tiene el array de dependencias vacio
//por lo que se ejecutara una sola vez al iniciar la aplicación

  return (
    <div className="digital-clock">
       <h1>{clockState}</h1> 
    </div>
  )
}
 
 

 