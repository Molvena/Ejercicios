
import { Button, Counter } from './components/Button/Button'
import "./App.css";
import { ButtonConUC, CounterConUC } from './components/ButtonConUC/ButtonConUC';

function App() {
 

  return (
    <>
    <div>
      <Counter/>
      <Button/>
    </div>
    <div>
      <CounterConUC/>
      <ButtonConUC/>
    </div>
 
    
    </>
  )
}

export default App
