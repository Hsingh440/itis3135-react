import { Link } from "react-router";
function Nav() {
  return (
    <nav aria-label="Primary">

          <Link to="/">Home</Link>
           ||
          <Link to="/introduction">Introduction</Link>
          ||
          <Link to="/contract">Contract</Link>
        
    </nav>
  );
}

export default Nav;
