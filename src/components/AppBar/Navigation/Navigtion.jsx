import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        Home
      </NavLink>

      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        Login
      </NavLink>

      <NavLink
        to="/register"
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        Register
      </NavLink>
    </nav>
  );
}
