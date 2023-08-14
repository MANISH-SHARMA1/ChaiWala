import React, { useState } from "react";
import "./Checkout.scss";
import Footer from "../../components/Footer/Footer";
import Table from "./table/Table";
import Information from "./Information/Information";

function Checkout() {
  const states = [
    {
      label: "Andhra Pradesh",
      value: "andhraPradesh",
    },
    {
      label: "Arunanchal Pradesh",
      value: "arunanchalPradesh",
    },
    {
      label: "Assam",
      value: "assam",
    },
    {
      label: "Bihar",
      value: "bihar",
    },
    {
      label: "Chhattisgarh",
      value: "chhattisgarh",
    },
  ];
  const [differentAddress, setDifferentAddress] = useState("false");

  function checkbox() {
    setDifferentAddress(!differentAddress);
  }

  return (
    <>
      <div className="checkout">
        <h1>CHECKOUT</h1>
        <div className="coupon">
          <p>Have a coupon? Click here to enter your code.</p>
        </div>
        <h3>Billing Details</h3>
        <div className="form">
          <form action="">
            <div className="name">
              <div className="detail">
                <label htmlFor="firstName" aria-required>
                  First name <span>*</span>
                </label>
                <input type="text" id="firstName" className="inputName" />
              </div>
              <div className="detail">
                <label htmlFor="lastName" aria-required>
                  Last name <span>*</span>
                </label>
                <input type="text" id="lastName" className="inputName" />
              </div>
            </div>
            <div className="detail">
              <label htmlFor="companyName">Company Name (optional)</label>
              <input type="text" />
              <label htmlFor="region" aria-required>
                Country/Region <span>*</span>
                <br /> <b>India</b>
              </label>
            </div>
            <div className="detail">
              <label htmlFor="streetAddress" aria-required>
                Street address <span>*</span>
              </label>
              <input
                id="streetAddress"
                type="text"
                placeholder="House number and street name"
              />
              <input
                id="streetAddress"
                type="text"
                placeholder="Apartment, suite, unit, etc.(optional)"
              />
            </div>
            <div className="detail">
              <label htmlFor="townOrCity" aria-required>
                Town / City <span>*</span>
              </label>
              <input id="townOrCity" type="text" />
            </div>
            <div className="detail">
              <label htmlFor="state" aria-required>
                State <span>*</span>
              </label>
              <select name="" id="state">
                {states.map((state) => {
                  <option value={state.value}>{state.label}</option>;
                })}
              </select>
            </div>
            <div className="detail">
              <label htmlFor="pinCode" aria-required>
                PIN Code <span>*</span>
              </label>
              <input id="pinCode" type="number" />
            </div>
            <div className="detail">
              <label htmlFor="phone" aria-required>
                Phone <span>*</span>
              </label>
              <input id="phone" type="tel" />
            </div>
            <div className="detail">
              <label htmlFor="email" aria-required>
                Email Address <span>*</span>
              </label>
              <input id="email" type="email" />
            </div>
            <div className="checkbox">
              <input type="checkbox" onChange={checkbox} />
              <label id="checkbox" htmlFor="checkbox">
                Ship to a different address?
              </label>
            </div>
            {differentAddress ? (
              <div></div>
            ) : (
              <div className="additionalAddress">
                <div className="name">
                  <div className="detail">
                    <label htmlFor="firstName" aria-required>
                      First name <span>*</span>
                    </label>
                    <input type="text" id="firstName" className="inputName" />
                  </div>
                  <div className="detail">
                    <label htmlFor="lastName" aria-required>
                      Last name <span>*</span>
                    </label>
                    <input type="text" id="lastName" className="inputName" />
                  </div>
                </div>
                <div className="detail">
                  <label htmlFor="companyName">Company Name (optional)</label>
                  <input type="text" />
                  <label htmlFor="region" aria-required>
                    Country/Region <span>*</span>
                    <br /> <b>India</b>
                  </label>
                </div>
                <div className="detail">
                  <label htmlFor="streetAddress" aria-required>
                    Street address <span>*</span>
                  </label>
                  <input
                    id="streetAddress"
                    type="text"
                    placeholder="House number and street name"
                  />
                  <input
                    id="streetAddress"
                    type="text"
                    placeholder="Apartment, suite, unit, etc.(optional)"
                  />
                </div>
                <div className="detail">
                  <label htmlFor="townOrCity" aria-required>
                    Town / City <span>*</span>
                  </label>
                  <input id="townOrCity" type="text" />
                </div>
                <div className="detail">
                  <label htmlFor="state" aria-required>
                    State <span>*</span>
                  </label>
                  <select name="" id="state">
                    {states.map((state) => {
                      <option value={state.value}>{state.label}</option>;
                    })}
                  </select>
                </div>
                <div className="detail">
                  <label htmlFor="pinCode" aria-required>
                    PIN Code <span>*</span>
                  </label>
                  <input id="pinCode" type="number" />
                </div>
              </div>
            )}
            <div className="detail">
              <p>Additional Information</p>
              <label htmlFor="notes">Order notes (optional)</label>
              <textarea
                name=""
                id="notes"
                placeholder="Notes about your order, e.g. special notes for delivery."
              ></textarea>
            </div>
          </form>
        </div>
      </div>
      
      <Table />
      <Information />
      <Footer />
    </>
  );
}

export default Checkout;
