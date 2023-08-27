import React from "react";
import "./Table.scss";
import { useSelector } from "react-redux";

function Table() {
  const cart = useSelector((state) => state?.cartSlice.cart);
  var totalAmount = 0;
  cart.forEach((item) => {
    totalAmount += item.price * item.quantity;
  });
  return (
    <>
      <div className="table">
        <h2>Your Order</h2>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr>
                <td>
                  <span>{item.name}</span>
                </td>
                <td>
                  <span>₹{item.price}</span>
                </td>
              </tr>
            ))}

            <tr>
              <td>Subtotal</td>
              <td>₹{totalAmount}.00</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>₹{totalAmount}.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
