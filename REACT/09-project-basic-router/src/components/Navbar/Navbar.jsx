import { NavLink } from "react-router-dom";
import "./navBar.css";

export const Navbar = () => {
  return (
    <nav className="nav">
        <NavLink to="/">
            <button>HOME</button>
        </NavLink>
        <NavLink to="/heroes">
            <button>HEROES</button>
        </NavLink>
        <NavLink to="/about">
            <button>ABOUT</button>
        </NavLink>

    </nav>
  )
}
