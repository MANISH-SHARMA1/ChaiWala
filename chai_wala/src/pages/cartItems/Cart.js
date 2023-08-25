import React from "react";
import "./Cart.scss";
import { RxCrossCircled } from "react-icons/rx";
import CartItem from "./cartItem.js/CartItem";
function Cart({ onClose }) {
  
  return (
    <>
      <div className="cart">
        <div className="overlay" onClick={onClose}></div>
        <div className="cart-content">
          <div className="topp">
            <h4>SHOPPING CART (1) </h4>
            <div className="cross">
              <RxCrossCircled onClick={onClose} />
            </div>
          </div>
         <CartItem/>
        </div>
      </div>
    </>
  );
}

export default Cart;
