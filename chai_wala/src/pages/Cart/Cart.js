import React from "react";
import "./Cart.scss";
import Footer from "../../components/Footer/Footer";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function Cart() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state?.cartSlice.cart);
  const onEmpty = cart.length === 0;

  return (
    <>
      {onEmpty ? (
        <div className="Cart">
          <div className="cart-container">
            <h1>Cart</h1>
            <div className="container">
              <p>Your cart is currently empty.</p>
            </div>
            <div className="btn" onClick={() => navigate("/i_tea")}>
              Return to shop
            </div>
          </div>
        </div>
      ) : (
        <div>
          <CartItem cart={cart} />
        </div>
      )}

      <Footer />
    </>
  );
}

export default Cart;
