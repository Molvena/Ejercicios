//Crea un componente AppT que tenga un estado con un arreglo de tareas
// y un input para agregar nuevas tareas
//Crea un componente ListaTareas que acepte las tareas como props y las muestre

import { useState } from 'react'

import './App.css'


function App() {
     //Creamos un estado para almacenar el conjunto de tareas
    //Cuyo valor por defecto es un array vacio
    //al que iremos añadiendo tareas
    const[tareas, setTareas] = useState([]);
    
    //Creamos otro estado para almacenar la nueva tarea
    
    const [newTarea, setNewTarea] = useState();
       
    //Creamos una función que añada la tarea al array
    //manteniendo las anteriores
    //sera a la que llamamemos cuando le demos al boton
  
    const addTarea = () => {setTareas([...tareas, newTarea])};
          
    //Creamos una función que elimine la tarea al array
    //manteniendo las anteriores
    //sera a la que llamamemos cuando le demos al boton

    const eliminarTarea = (tarea) => {
      setTareas(tareas.filter(t => t!==tarea)); //!vER EL FILTER
    };
    console.log(tareas);
  
  return (
    <>
    <ListaTareas tareas ={tareas} eliminarTarea={eliminarTarea}/>
    <input
     type="text"
     value={newTarea} 
     onChange={(t) => setNewTarea(t.target.value)}
     placeholder='Nueva Tarea'
    />
    <button onClick={addTarea}>Añadir Tarea</button>
        
    
    </>
    
  );
}
const ListaTareas = ({tareas, eliminarTarea}) => {
    
  return (
    <>
      <h4>Lista tareas:</h4>
      <ul>
        {tareas.map((tarea, index) => (
          <Tarea 
          key={index}
          tarea={tarea}
          eliminar={()=>eliminarTarea(index)}
          />
        ))}
      </ul>
    </>
  )
};
export const Tarea = ({tarea, eliminar}) => {
  return (
    <li>
      {tarea}<button onClick={eliminar}>Eliminar</button>
    </li>
  )
};



export default App
