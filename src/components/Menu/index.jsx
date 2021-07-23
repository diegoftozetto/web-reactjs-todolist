import { NavLink } from 'react-router-dom';
import './styles.css';

export const Menu = () => {
  return (
    <nav className="menu-background">
      <div className="menu-flex-container">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">Sobre</NavLink>
      </div>
    </nav>
  );
};
