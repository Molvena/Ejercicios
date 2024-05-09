import { useState } from 'react'

import './App.css'
import { Movie } from './components/Movie/Movie';
import { Review } from './components/Review/Review';

function App() {
  const [score, setScore] = useState(0);
  
  return (
    <>
    <div className="App">
      <Movie
      title = "La vida es bella"
      poster = "https://res.cloudinary.com/dkr0cj7oc/image/upload/v1712072815/El_principito_xuppkt.jpg"
      />
      <label htmlFor="score">AÑADE TU PUNTUACION</label>
      <input 
      type="number"
      value={score}
      onChange={(e) => setScore(e.target.valueAsNumber)} 
      />
      <Review
      comment = "Es muy buena"
      score = {score}
      
      />
     
    </div>
    </>
  )
}

export default App
