import { NavLink } from "react-router-dom";
import cl from "./header.module.css";

const Header = () => {
  return (
    <header>
      <h1 className={cl.title}>ROBOTS</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
