import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav aria-label="Primary">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/introduction">Introduction</NavLink>
        </li>
        <li>
          <NavLink to="/contract">Contract</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
