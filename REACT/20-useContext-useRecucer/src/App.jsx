// Utilizando useContext y useReducer creeis una gestion de tareas,
// donde se pueda añadir una tarea a un estado global utilizando el context.

// La modificacion tendra que ser mediante una funcion reductora

// Debereis definir un componente donde se consuma la informacion del context 
//y se use la funcion reductora.

// Paso 1: Se crea un contexto para las tarea
// Paso 2: se define una función para el reducer(funcion reductora) que añade nuevas tareas.
// PAso 3: Crear el provider que contendrá el estado y la función reductora.
// Paso 4: AddTodo permite añadir nuevas tareas utilizando el método dispatch del contexto
// Paso 5: TodoList muestra las tareas.

import { useContext, useState, createContext, useReducer } from 'react';

//Paso 1
const TodoContext = createContext();
//Paso 2
function todoReducer (state, action){
  switch (action.type) {
    case "add":
      return [...state,action.payload];
    default:
      return state;
  }
}
//Paso 3
const TodoProvider = ({children}) => {
  const [todos, dispatch] = useReducer(todoReducer,[]);

  return(
    <TodoContext.Provider value= {{todos, dispatch}}>
      {children}
    </TodoContext.Provider>
  );
};
//Paso 4
const AddTodo = () => {
  const { dispatch } = useContext(TodoContext);
  const addToTask = () => dispatch({ type: "add", payload: "New Task" });

  return <button onClick={() => addToTask()}>Add Todo</button>;
};

//Paso 5
const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
};

function App() {
  return (
    <TodoProvider>
      <AddTodo />
      <TodoList />
    </TodoProvider>
  );
}

export default App;








