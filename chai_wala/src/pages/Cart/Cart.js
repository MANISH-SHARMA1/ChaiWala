import React from "react";
import "./Cart.scss";
import Footer from "../../components/Footer/Footer";

function Cart() {
  return (
    <>
      <div className="Cart">
        <div className="cart">
          <h1>Cart</h1>
          <div className="container">
            <p>Your cart is currently empty.</p>
          </div>
          <div className="btn">Return to shop</div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
