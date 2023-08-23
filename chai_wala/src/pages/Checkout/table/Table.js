import React from 'react'
import './Table.scss'

function Table() {
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
              <tr>
                <td>
                  <span>i-Tea Premium - 250 Gm</span> × 1{" "}
                </td>
                <td>
                  <span>₹ 130.00</span>
                </td>
              </tr>
              <tr>
                <td>Subtotal</td>
                <td>₹130.00</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>
                  There are no shipping options available. Please ensure that
                  your address has been entered correctly, or contact us if you
                  need any help.
                </td>
              </tr>
              <tr>
                <td>Total</td>
                <td>₹130.00</td>
              </tr>
            </tbody>
          </table>
        </div></>
  )
}

export default Table