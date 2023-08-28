import React from "react";
import "./Cart.scss";
import { RxCrossCircled } from "react-icons/rx";
import { BsCartX } from "react-icons/bs";
import CartItem from "./cartItem.js/CartItem";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function Cart({ onClose }) {
  const cart = useSelector((state) => state.cartSlice.cart);
  const isCartEmpty = cart.length === 0;
  let length = 0;
  cart.forEach((item) => {
    length += item.quantity;
  });
  let totalAmount = 0;
  cart.forEach((item) => {
    totalAmount += item.quantity * item.price;
  });

  const navigate = useNavigate();

  return (
    <>
      <div className="cart">
        <div className="overlay" onClick={onClose}></div>
        <div className="cart-content">
          <div className="topp">
            <h4>SHOPPING CART ({length}) </h4>
            <div className="cross">
              <RxCrossCircled onClick={onClose} />
            </div>
          </div>
          {cart.map((item) => (
            <CartItem key={item._id} cart={item} />
          ))}
          {isCartEmpty && (
            <div className="empty-cart-info">
              <div className="icon">
                <BsCartX />
              </div>
              <h4>Cart is Empty</h4>
            </div>
          )}
          {!isCartEmpty && (
            <div className="bottom">
              <div className="Total">
                <div className="total">
                  <p>Total</p>
                </div>
                <div className="total">
                  <p>₹{totalAmount}.00</p>
                </div>
              </div>
              <div
                className="checkout"
                onClick={() => {
                  navigate("/checkout");
                }}
              >
                <p>CHECKOUT</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
