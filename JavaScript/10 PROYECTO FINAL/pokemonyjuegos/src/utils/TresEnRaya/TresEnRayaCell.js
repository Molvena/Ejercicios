
//Pongo un contador a cero para empezar los turnos pares e impares
//Mas abajo me refiero al turno par e impar  de cada partida 
//para que coja un color u otro

//import { PrintTemplateTresEnRaya } from "../../pages";
import { initControler } from "../route";
//import { haGanado, tablero } from "./TresEnRayaComprobacion";



let turno = 0;
//Creo un array de 9 posiciones, que voy a ir rellenando
//hay que crearlo con un let y no con const, para poder vaciarlo al final de la partida
let tablero = [];

export const cellPulsada = (e, pos) => {
//console.log("pulsado");
    turno ++;
    const cell = e.target;
    const color = turno % 2 ?  "var(--colorUno)":"var(--colorDos)"
    cell.style.backgroundColor = color ;
    console.log(pos);
    tablero[pos] = color;
    console.log(haGanado());
    console.log(tablero);
    
//Definimos mas abajo y fuera de esta la funcion haGanado
//Si la funcion haGanado es true, se ha ganado la partida
    if (haGanado() === true) {
        setTimeout(() => {
            // SetTimeOut para que espere un poquito y vaciar el div
        const div = document.querySelector("#game-board");
        div.innerHTML = "";
         //Ahora creo un mensaje de ganador y un boton de play again
         //y fuera de esto defino los listeners de este
        const h1 = document.createElement("h1");
        h1.innerHTML = "Jugador " + color +" Has ganado!!";
        const button = document.createElement("button");
        button.innerHTML = "Play again";
        button.setAttribute("id", "TresEnRayaReset");
        div.append(h1, button);
        listener();
            }, 500); 
         //Si la funcion haGanado es false, pero el array esta lleno y ningun valor es cero hay empate
        }else if (haGanado() === false && tablero.length === 9 //&& !tablero[pos] === 0
        ){
        console.log("empate");
        setTimeout(() => {
        // SetTimeOut para que espere un poquito y vaciar el div
        const divEmpate = document.querySelector("#game-board");
        divEmpate.innerHTML = "";
        //Ahora creo un mensaje de empate y un boton de play again
        //y fuera de esto defino los listeners de este
        const h1Empate = document.createElement("h1");
        h1Empate.innerHTML = "Empate";
        const buttonEmpate = document.createElement("button");
        buttonEmpate.innerHTML = "Play again";
        buttonEmpate.setAttribute("id", "TresEnRayaReset");
        divEmpate.append(h1Empate, buttonEmpate);
        listener();
        }, 500);

        }
    };
//Si la funcion haGanado es true, se ha ganado la partida



//Vamos a crear una funcion que evalue el tablero
//Lo primero que evaluamos es que las tres posiciones de arriba sean iguales
//es decir la 0, 1 y 2 y luego le pongo que no sea indefinido, es decir que exista
//y despues vamos comprobando el resto de posibles 3 en raya.

 const haGanado = () =>{

    if(tablero[0] == tablero[1] && tablero[0] == tablero[2] && tablero[0]){
        return true;
    }else if(tablero[3] == tablero[4] && tablero[3] == tablero[5] && tablero[3]){
        return true;
    }if(tablero[6] == tablero[7] && tablero[6] == tablero[8] && tablero[6]){
        return true;
    }else if(tablero[0] == tablero[3] && tablero[0] == tablero[6] && tablero[0]){
        return true;
    }else if(tablero[1] == tablero[4] && tablero[1] == tablero[7] && tablero[1]){
        return true;
    }else if(tablero[2] == tablero[5] && tablero[2] == tablero[8] && tablero[2]){
        return true;
    }else if(tablero[0] == tablero[4] && tablero[0] == tablero[8] && tablero[0]){
        return true;
    }else if(tablero[2] == tablero[4] && tablero[2] == tablero[6] && tablero[2]){
        return true;
    }return false;
};


const listener = () => {
    //Le añadimos un evento al boton de play again
    const reset = document.querySelector("#TresEnRayaReset");
    reset.addEventListener("click", () => {
      // Reseteamos contador
    turno = 0;
    //vaciamos las celdas
    tablero =[];

  //e iniciamos el juego
      initControler("TresEnRaya");
      
      console.log(turno);
       console.log(tablero);
    });
  };
