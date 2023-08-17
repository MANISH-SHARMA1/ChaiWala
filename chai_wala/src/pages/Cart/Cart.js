import React, { useState } from "react";
import "./Cart.scss";
import Footer from "../../components/Footer/Footer";
import CartItem from "./CartItem";

function Cart() {
  const [cart, setCart] = useState("true");
  return (
    <>
      {cart ? (
        <div className="Cart">
          <div className="cart">
            <h1>Cart</h1>
            <div className="container">
              <p>Your cart is currently empty.</p>
            </div>
            <div className="btn">Return to shop</div>
          </div>
        </div>
      ) : (
        <CartItem />
      )}
      <Footer />
    </>
  );
}

export default Cart;
