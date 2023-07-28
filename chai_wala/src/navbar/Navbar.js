import "./Navbar.scss";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/aboutUs">
              About Us
            </Link>
          </li>
          <li>
            <Link className="link" to="/venture">
              Venture
            </Link>
          </li>
          <li>
            <Link className="link" to="/gallery">
              Gallery
            </Link>
          </li>
          <li>
            <Link className="link" to="/enquiry">
              Enquiry
            </Link>
          </li>
          <li>
            <Link className="link" to="/careers">
              Careers
            </Link>
          </li>
          <li>
            <Link className="link" to="/i_tea">
              i-Tea
            </Link>
          </li>
          <li>
            <Link className="link" to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className="link" to="/contactUs">
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="link" to="/cart">
              Cart
            </Link>
          </li>
          <li>
            <Link className="link" to="/checkout">
              Checkout
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;