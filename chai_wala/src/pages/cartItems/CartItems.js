import React, { useState } from "react";
import "./CartItems.scss";
import { RxCrossCircled } from "react-icons/rx";

function CartItems() {
  // const [isShown, setIsShown] = useState(true);
  // function cart(){
  //   setIsShown(!isShown);
  // }
  return (
    <>
      <div className="cartItems">
        <div className="topp">
        <h4>
          SHOPPING CART (1){" "}
          <span>
            <RxCrossCircled />
          </span>
        </h4>
        </div>
        <div className="item">
          <img className="desc" src="https://placehold.co/50x50" alt="img" />
          <div className="desc">
            <p>i-Tea Premium - 250 Gm</p>
            <p>₹130.00</p>
          </div>
          <div className="desc bttn">
            <button className="btn">+</button>
            <input className="btn" type="text" />
            <button className="btn">-</button>
          </div>
        </div>
        <div className="price">
          <div className="subtotal">
            <p>Subtotal</p>
            <p>Total</p>
          </div>
          <div className="subtotal">
            <p id="rate">₹130.00</p>
            <p id="rate">₹130.00</p>
          </div>
        </div>
        <div className="buttons">
          <button type="button">CART</button>
          <button type="button">CHECKOUT</button>
        </div>
      </div>
    </>
  );
}

export default CartItems;
