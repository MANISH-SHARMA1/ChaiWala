import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./List.scss";

function List() {
  return (
    <div className="list">
      <div className="listNav">
        <nav className="listNavbar">
          <ul>
            <li>
              <Link className="listLink" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="listLink" to="/aboutUs">
                About Us
              </Link>
            </li>
            <li>
              <Link className="listLink" to="/venture">
                Venture
              </Link>
            </li>
            <li>
              <Link className="listLink" to="/gallery">
                Gallery
              </Link>
            </li>
            <li>
              <Link className="listLink" to="/enquiry">
                Enquiry
              </Link>
            </li>
            <li>
              <Link className="listLink" to="/careers">
                Careers
              </Link>
            </li>

            <li>
              <Link className="listLink" to="/i_tea">
                i-Tea
              </Link>
            </li>
            <li>
              <Link className="listLink" to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className="listLink" to="/contactUs">
                Contact Us
              </Link>
            </li>
            <li>
              <Link className="listLink" to="/cart">
                Cart
              </Link>
            </li>
            <li>
              <Link className="listLink" to="/checkout">
                Checkout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}

export default List;
