import { Link } from "react-router-dom";
import "./styles.css";

export const Menu = () => {
  return (
    <nav className="menu-background">
      <ul className="menu-flex-container">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};
