import React, { useState } from "react";
import "./Navtop.scss";
import { MdCall } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import CartItems from "../pages/cartItems/CartItems";
function Navtop() {
  const [isShown, setIsShown] = useState(false);
  const cartItems = () => {
    setIsShown(!isShown);
  };

  return (
    <>
      {isShown && <CartItems />}
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
      <div className="cartt" onClick={cartItems}>
        <BsCart4 />
      </div>
    </>
  );
}

export default Navtop;
