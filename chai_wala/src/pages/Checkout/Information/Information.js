import React, { useState } from "react";
import "./Information.scss";

function Information() {
  const [fullfill, setFullfill] = useState("false");
  function information() {
    console.log("Place Order Clicked");
    setFullfill(!fullfill);
  }
  return (
    <>
      <div className="info">
        {fullfill ? (
          <div></div>
        ) : (
          <div className="checked">
            <p>
              <span>Billing First name</span> is a required field.
            </p>
            <p>
              <span>Billing Last name</span> is a required field.
            </p>
            <p>
              <span>Billing Street Address</span> is a required field.
            </p>
            <p>
              <span>Billing Town / City</span> is a required field.
            </p>
            <p>
              <span>Billing PIN Code</span> is a required field.
            </p>
            <p>
              <span>Billing Phone</span> is a required field.
            </p>
            <p>
              <span>Billing Email address</span> is a required field.
            </p>
            <p>
              <span>Shipping First name</span> is a required field.
            </p>
            <p>
              <span>Shipping Last name</span> is a required field.
            </p>
            <p>
              <span>Shipping Street address</span> is a required field.
            </p>
            <p>
              <span>Shipping Town / City</span> is a required field.
            </p>
            <p>
              <span>Shipping PIN Code</span> is a required field.
            </p>
            <p>
              No shipping method has been selected. Please double check your
              address, or contact us if you need any help.
            </p>
            <p>Invalid payment method.</p>
          </div>
        )}
        <div className="para">
          <p>
            Sorry, it seems that there are no available payment methods for your
            state. Please contact us if you require assistance or wish to make
            alternate arrangements.
          </p>
        </div>
        <div className="Para">
          <p>
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our <span>privacy policy.</span>
          </p>
        </div>
        <div className="button" onClick={information}>
          <p>Place Order</p>
        </div>
      </div>
    </>
  );
}

export default Information;
