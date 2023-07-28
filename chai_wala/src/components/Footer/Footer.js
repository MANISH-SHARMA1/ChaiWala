import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="content">
          <div className="block">
            <h1>Get in touch</h1>
            <ul>
              <li>+91 722 290 5222</li>
              <li>salessupport@mbachaiwala.com</li>
              <li>info@mbachaiwala.com</li>
            </ul>
          </div>
          <div className="block">
            <h1>Quick Links</h1>
            <ul>
              <li>FAQ's</li>
              <li>Terms Conditions</li>
              <li>Privacy Policy</li>
              <li>Cancellation Refund</li>
              <li>Shipping Policy</li>
            </ul>
          </div>
          <div className="block">
            <h1>Social Media</h1>
            <ul>
              <li>Follow</li>
              <li>Follow</li>
              <li>Follow</li>
              <li>Follow</li>
              <li>Follow</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
