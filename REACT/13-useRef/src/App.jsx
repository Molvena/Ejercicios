import { useState } from 'react'

import './App.css'
import { CodeUseRef } from './components/CodeUseRef/CodeUseRef'
import { CodeRefFocus } from './components/CodeRefFocus/CodeRefFocus'
import { CodeTaxCalculator } from './components/CodeTaxCalculator/CodeTaxCalculator'

function App() {
  

  return (
    <>
    <div>
      <CodeUseRef/>
    </div>
    <div>
      <CodeRefFocus/>
    </div>
    <div>
    <CodeTaxCalculator/>
    </div>
 
     
      
    </>
  )
}

export default App
