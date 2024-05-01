import { useState } from 'react'
import './App.css'
import { useCounter } from './assets/hooks/useCounter';

export const App = () => {
  const { count, handleIncrement, handleDecrement } = useCounter(0);
  
  return (
    <>
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Suma 1</button>
      <button onClick={handleDecrement}>Resta 1</button>
    </div>
    <div>
    
    </div>

    </>
  )
}

