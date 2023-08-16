import React from "react";
import "./CartItem.scss";
import iTea from  "../../Assets/iTea/i-Tea-Regular.webp"

function CartItem() {
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
          <tr>
            <td id="cross">×</td>
            <td>
              <img src={iTea} alt="img" />
            </td>
            <td id="link">i-Tea Premium - 250 Gm</td>
            <td>₹130.00</td>
            <td>
              <input type="number" />
            </td>
            <td>₹130.00</td>
          </tr>
        </table>
        <div className="btns">
          <input type="text" placeholder="Coupon code" />
          <div className="coupon">
            <p>Apply coupon</p>
          </div>
          <div className="update">
            <p>Update cart</p>
          </div>
        </div>
      </div>

      <div className="totals">
        <table>
          <tr>
            <th>Subtotal</th>
            <td>₹130.00</td>
          </tr>

          <tr>
            <th>Shipping</th>
            <td>
              Village+Post - Khandlana, Saharanpur 247341, Uttar Pradesh.{" "}
              <span style={{ color: "skyblue" }}>
                Enter a different address
              </span>
            </td>
          </tr>
          <tr>
            <th>Total</th>
            <td>₹130.00</td>
          </tr>
        </table>
        <h2>Cart totals</h2>
        <div className="btnCheckout">
          <p>Proceed to checkout</p>
        </div>
      </div>
    </>
  );
}

export default CartItem;
