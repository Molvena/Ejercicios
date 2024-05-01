import { Link } from 'react-router-dom';
import "./main.css";

export const Main = () => {
  return (
    <main className="main">
          <>
      <h2>Home Page</h2>

      <p>App ejemplo sobre React Router</p>

      <ul>
        <li>
          <p>
            <span>Visita la página de héroes 🦸‍♀️:</span>
            <Link to="heroes">Heroes</Link>
          </p>
        </li>
      </ul>
    </>
    </main>
  )
}
