import { useEffect, useState } from "react";

//Creamos un componente de mensaje que usaremos mas abajo
//En el return le metemos dos input para poder modificar el nombre del superhero
//Dentro de este metemos un useEffect,  que unicamente lo que hace 
//es lanzar dos console log, uno al montarse y otro al desmontarse
//De este modo cada vez que se produzca un cambio en nuestro componente padre
// solicitamos realizar un nuevo render,
//y  nos limpia la funcionalidad antes de cada renderizado
//el return que hacemos en el useEffect, también llamada función cleanUp
// no solo actúa al desmontar el componente,
// sino que se ejecuta previamente a la nueva invocación de un useEffect 


export const MessageComponentTwo = () => {
    const[myInfo, setMyInfo] = useState({
        name: "Peter",
        lastName: "Parker",
    });

    useEffect(() => {
        console.log("Llamado después de cada Render");
        return() =>  console.log("Desmonto el componente");
    },[]);
    
  return (
    <div>
        <h4>
        {myInfo.name} {myInfo.lastName}
      </h4>
      <input
        type="text"
        value={myInfo.name}
        onChange={(e) => setMyInfo({ ...myInfo, name: e.target.value })}
      />
      <input
        type="text"
        value={myInfo.lastName}
        onChange={(e) => setMyInfo({ ...myInfo, lastName: e.target.value })}
      />
    </div>
  )
};

//Ahora creamos un componente que controla la visibilidad del componente mensaje anterior
//mediante un useState

export const CodeEffectUpdate = () => {
    const [visible, setVisible] = useState(false);

  return (
    <>
    {visible && <MessageComponentTwo />}
    <button onClick={() => setVisible(!visible)}>Open SuperHero</button>
  </>
  )
}

//ejemplo de count
//useEffect Ract3 por ahi voy