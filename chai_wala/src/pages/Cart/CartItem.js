import React from "react";
import "./CartItem.scss";
import { removeFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

function CartItem({ cart }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let totalAmount = 0;
  cart.forEach((item) => {
    totalAmount += item.quantity * item.price;
  });
  return (
    <>
      <div className="table">
        <table>
          <tr>
            <th colSpan={2}></th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
          {cart?.map((item) => (
            <tr>
              <td
                id="cross"
                onClick={() => {
                  dispatch(removeFromCart(item));
                }}
              >
                ×
              </td>
              <td>
                <img src={item.imgUrl} alt="img" />
              </td>
              <td
                id="link"
                onClick={() => {
                  navigate(`/product/${item._id}`);
                }}
              >
                {item.name}
              </td>
              <td>₹{item.price}</td>
              <td>{item.quantity}</td>
              <td>₹{item.price * item.quantity}.00</td>
            </tr>
          ))}
        </table>
      </div>

      <div className="totals">
        <h2>Cart totals</h2>

        <table>
          <tr>
            <th>Subtotal</th>
            <td>₹{totalAmount}.00</td>
          </tr>

          <tr>
            <th>Total</th>
            <td>₹{totalAmount + 40}.00</td>
          </tr>
        </table>
        <div
          className="btnCheckout"
          onClick={() => {
            navigate("/checkout");
          }}
        >
          <p>Proceed to checkout</p>
        </div>
      </div>
    </>
  );
}

export default CartItem;
