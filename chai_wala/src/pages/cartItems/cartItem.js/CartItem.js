import React from "react";
import "./CartItem.scss";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../../redux/cartSlice";

function CartItem({ cart }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="CartItem">
        <div className="item-info-wrapper">
          <div className="item-info">
            <div className="item-img">
              <img src={cart?.imgUrl} alt="" />
            </div>
            <div className="Info">
              <h4 className="title desc">{cart.name}</h4>
              <p className="price desc">₹{cart.price}</p>
            </div>
            <div className="quantity-selector">
              <span
                className="btn"
                onClick={() => dispatch(removeFromCart(cart))}
              >
                -
              </span>
              <span className="quantity">{cart.quantity}</span>
              <span className="btn" onClick={() => dispatch(addToCart(cart))}>
                +
              </span>
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
}

export default CartItem;
