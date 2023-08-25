import React from "react";
import "./CartItem.scss";
import { AiOutlineClose } from "react-icons/ai";

function CartItem() {
  return (
    <>
      <div className="CartItem">
        <div className="item-info-wrapper">
          <div className="item-info">
            <div className="item-img">
              <img src="https://via.placeholder.com/250" alt="" />
            </div>
            <div className="Info">
              <h4 className="title desc">i-Tea Premium-250 gm</h4>
              <p className="price desc">₹ 130.00</p>
            </div>
            <div className="quantity-selector">
              <span className="btn">-</span>
              <span className="quantity">1</span>
              <span className="btn">+</span>
            </div>
          </div>
        </div>
        <div className="Total">
          <div className="total">
            <p>Subtotal</p>
            <p>Total</p>
          </div>
          <div className="total">
            <p>₹390.00</p>
            <p>₹390.00</p>
          </div>
        </div>
        <div className="checkout">
          <div className="p">
            <p>CART</p>
          </div>
          <div className="p">
            <p>CHECKOUT</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
