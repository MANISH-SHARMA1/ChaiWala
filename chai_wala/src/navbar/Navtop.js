import React from "react";
import "./Navtop.scss";
import { MdCall } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
function Navtop() {
  return (
    <>
      <div className="navTop">
        <div className="topp">
          {" "}
          <div id="top" className="vertical"></div>
          <p id="top">
            {" "}
            <MdCall id="icon" />
            +91 722 290 5222
          </p>
          <p id="top">
            <FaTelegramPlane id="icon" />
            info@mbachaiwala.com
          </p>
          <div id="top" className="vertical"></div>
        </div>
      </div>
    </>
  );
}

export default Navtop;
