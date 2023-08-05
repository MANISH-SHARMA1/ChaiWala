import React from "react";
import "./Footer.scss";
import backgroundImage from "../../Assets/assets/MBA-MAIN-BG-Pink.png";
import { MdCall, MdOutlineFacebook } from "react-icons/md";
import {
  FaEnvelope,
  FaEnvelopeOpenText,
  FaInstagramSquare,
} from "react-icons/fa";
import {
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
function Footer() {
  return (
    <>
      <div
        className="footer"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="content">
          <div className="block">
            <h1>Get in touch</h1>
            <ul>
              <li>
                <span>
                  <MdCall />
                </span>
                +91 722 290 5222
              </li>
              <li>
                <span>
                  <FaEnvelope />
                </span>
                salessupport@mbachaiwala.com
              </li>
              <li>
                <span>
                  <FaEnvelopeOpenText />
                </span>
                info@mbachaiwala.com
              </li>
            </ul>
          </div>
          <div className="block">
            <h1>Quick Links</h1>
            <ul>
              <li id="ull">FAQ's</li>
              <li id="ull">Terms Conditions</li>
              <li id="ull">Privacy Policy</li>
              <li id="ull">Cancellation Refund</li>
              <li id="ull">Shipping Policy</li>
            </ul>
          </div>
          <div className="block">
            <h1>Social Media</h1>
            <ul id="ul">
              <li id="li">
                <MdOutlineFacebook />
              </li>
              <li id="li">
                <AiFillTwitterCircle />
              </li>
              <li id="li">
                <FaInstagramSquare />
              </li>
              <li id="li">
                <AiFillYoutube />
              </li>
              <li id="li">
                <AiFillLinkedin />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
