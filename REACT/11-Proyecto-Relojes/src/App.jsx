import { useState } from 'react'
import './App.css'
import { ContDown, DigitalClock, StopWatch } from './components/index'

 export const App = () => {
  
  return (
    <>
      <DigitalClock/>
      <ContDown />
      <StopWatch/>      
    </>
  )
}


