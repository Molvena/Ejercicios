import { useState } from 'react'


import './App.css'
import { EffectOnLoad } from './components/EffectOnLoad/EffectOnLoad'
import { CodeEffectUnmount } from './components/CodeEffectUnmount/CodeEffectUnmount'
import { CodeEffectUpdate } from './components/CodeEffectUpdate/CodeEffectUpdate'
import { Count } from './components/count/Count'

function App() {
  

  return (
    <>
      <div>
       <EffectOnLoad/>       
      </div>

      <div>      
       <CodeEffectUnmount/>
      </div>
      <div>      
       <CodeEffectUpdate/>
      </div>
      <div>      
       <Count/>
      </div>
        
      
      <p >
       prueba
      </p>
    </>
  )
}

export default App
