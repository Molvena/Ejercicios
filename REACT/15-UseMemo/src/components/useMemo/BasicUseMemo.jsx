
//A veces hay que calcular un valor, ya sea mediante un cálculo complejo o
//una consulta costosa o a la red.
//Usando este Hook, esta operación se realiza solo una vez, 
//luego el valor se almacenará en el valor memorizado
//y la próxima vez que desee hacer referencia a él, lo obtendrá mucho más rápido.
//Una de las particularidades del useMemo es que los asignamos a una variable,
//es decir el valor de retorno es almacenado
//Está pensado para la optimización de recursos

import { useMemo } from "react";
import { useState } from "react";

const numbersArray =[1,2,8,4,3,9];
//matriz de numeros es una scores

const mapScores = (scores, caller) => {
    console.log('Invocamos mapScores =>', caller);
    return scores.map((num, index) => {
        const calc = (num * 3) / 2;
        const color = calc < 3 ? '🔴' : '🟢';
    
        return (
          <p key={index}>
            {calc} {color}
          </p>
        );
      });
    };
    

export const BasicUseMemo = () => {
//Hacemos un toogle para solicitar un render y ver si se hace un cálculo de nuevo

const [rerender,setRerender] = useState(false);

//llamamos a la función mapScores dos veces:
//La primera sin usar useMemo y el resultado se guarda en la variable marksContent.
//La segunda utilizando useMemo y el resultado se guarda en la variable marksContentMemo
const marksContent = mapScores(numbersArray, 'no-memo');

//useMemo(() => first, [second])
const marksContentMemo = useMemo(() => {
  return mapScores(numbersArray, 'memo');
}, []);



//En el return devolvemos por separado cada una de las llamadas

return (
  <div>
    <div className="rows">
      <div>
        <h3>No memo</h3>
        {marksContent}
      </div>

      <div>
        <h3>Usando memo</h3>
        {marksContentMemo}
      </div>
    </div>
{/* //Con este botoncambiamos el estado de rerender a true y false  */}
    <button onClick={() => setRerender(!rerender)}>Rerender</button>
  </div>
);
};



