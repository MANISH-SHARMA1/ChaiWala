import React from "react";
import "./ContactUs.scss";
import { FaTelegram } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";
import { useNavigate } from "react-router";

function ContactUs() {
  const navigate = useNavigate();
  return (
    <>
      <div className="Top">
        <div className="top">
          <h1>WANT TO GET IN TOUCH</h1>
          <p>
            We value your feedback, and we’re available to assist you with any
            queries or concerns you might have. Whether you want to join our
            team or partner with us, we are happy to have a chat!
          </p>
          <div className="button">
            <div
              className="btn"
              onClick={() => {
                navigate("/careers");
              }}
            >
              JOIN THE TEAM
            </div>
            <div
              className="btn bttn"
              onClick={() => {
                navigate("/for-enquiry");
              }}
            >
              LET'S DO BUSINESS
            </div>
            <div className="btn">A QUICK WORD</div>
          </div>
        </div>
        <div className="contact">
          <div className="heading">
            <h1>GET IN </h1>
            <h1>TOUCH</h1>
          </div>
          <div className="iconn">
            <FiPhoneCall />
          </div>
          <p>+91 722 290 5222</p>
          <div className="iconn">
            <FaTelegram />
          </div>
          <p>customersupport@mbachaiwala.com</p>
          <div className="iconn">
            <SiGooglemaps />
          </div>
          <p className="address">
            1106, 11th Floor, Skye Earth Corporate Park, 105, AB Road, Sector C,
            Slice 5, Part II, Shalimar Township, Indore, Madhya Pradesh 452010
          </p>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
