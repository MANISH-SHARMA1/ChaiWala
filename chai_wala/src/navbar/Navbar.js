import "./Navbar.scss";
import { Outlet, Link } from "react-router-dom";
import Navtop from "./Navtop";
import logo from "../Assets/navbar/logo.png";
import List from "./List";
import { useState } from "react";
const Navbar = () => {
  const [display, setDisplay] = useState(false);
  function list() {
    display ? setDisplay(false) : setDisplay(<List />);
  }
  return (
    <>
      <Navtop />
      <div className="nav">
        <nav className="navbar">
          <div className="container" onClick={list}>
            <div className="vertical"></div>
            <div className="vertical"></div>
            <div className="vertical"></div>
          </div>
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
              className="img"
              src={logo}
              alt=""
              // style={{
              //   width: "75px",
              //   height: "54px",
              //   zIndex: "1",
              //   margin: "-21px 0",
              // }}
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
        <div className="mobileNav">{display}</div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
