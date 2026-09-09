import PageLinks from './PageLinks';
import SocialLinks from './SocialLinks';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="nav-links">
        <PageLinks parentClass="nav-links" itemClass="nav-link" />

        {/* Add Registration link */}
        <li className="nav-link">
          <Link to="/registration">Registration</Link>
        </li>
      </nav>

      <SocialLinks parentClass="nav-icons" itemClass="nav-icon" />
    </>
  );
};

export default Navbar;
