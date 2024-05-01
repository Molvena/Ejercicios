import { useState } from "react";
import "./contDown.css";
import { useEffect } from "react";


export const ContDown = () => {
  // vamos a usar useState para definir el tiempo dentro de la constante time
const [time, setTime] = useState("");
// y  useEffect para que la variable countDownDate nos recoja
// el valor del tiempo en milisegundos de un string como "Jan 1, 2020 00:00:00". 
//copiamos la formula matemática
//Una vez definida nuestra fecha "meta" necesitamos incluir 
//un intervalo para que la función getTime() se ejecute segundo a segundo:
//De esta forma tendremos actualizada la información cada 1000 milisegundos.
// El "problema" al que nos enfrentamos ahora es que estamos almacenado 
//la fecha y hora actual dentro de la variable "now", por lo que siguiendo la lógica 
//debemos calcular la distancia entre `now` y `countDownDate`. 
//Esta diferencia será la que nos refleje segundo a segundo la cuenta atrás, 
//así que vamos a ello:

useEffect(() => {
  let countDownDate = new Date("Jan 1, 2020 00:00:00").getTime();
  let x = setInterval(() => {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //Hemos creado la variable distance a la cual le vamos a dar el valor de countDownDate
    // menos el valor de now. Esto nos devolverá el tiempo que falta cada segundo para la cuenta atrás.
    //Al haber obtenido el valor del tiempo en milisegundos tenemos que desglosar dicho tiempo 
    //en variables `days`, `hours`, `minutes` y `seconds` realizando en cada uno de ellos el calculo pertinente. 
    //Por ejemplo, en `minutes` estamos indicando que un minuto son `60` segundos convirtiéndolos 
    //de milisegundos a segundos.    
    // Una vez obtenido nuestras variables desglosadas vamos a concatenarlas todas para setear el tiempo
    // con `setTime` de la siguiente manera:

    setTime(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

    //Solo nos faltaría un aviso o algún tipo de mensaje que nos indique que la cuenta atrás ha terminado
    // y nos detenga el intervalo de 1000 milisegundos, por lo que vamos a realizar esta función
    //con un simple condicional:
    if (distance < 0) {
      clearInterval(x);
      setTime("COUNTDOWN FINISHED");
    }
  }, 1000);
   
}, [])



  return (
    <div className="countdown">
       <h2>{time}</h2>
      </div>
  )
}
