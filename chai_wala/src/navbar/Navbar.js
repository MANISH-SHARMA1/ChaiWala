import "./Navbar.scss";
import { Outlet, Link } from "react-router-dom";
import Navtop from "./Navtop";
import logo from "../Assets/navbar/logo.png";
const Navbar = () => {
  return (
    <>
      <Navtop />
      <div className="nav">
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
            <img
              src={logo}
              alt=""
              style={{
                width: "75px",
                height: "54px",
                zIndex: "1",
                margin: "-21px 0",
              }}
            />
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
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
