import React, { useEffect, useState } from "react";
import "./Checkout.scss";
import Table from "./table/Table";
import { axiosClient } from "../../utils/axiosClient.js";
import { useSelector } from "react-redux";

function Checkout() {
  const cart = useSelector((state) => state?.cartSlice.cart);
  var totalAmount = 0;
  cart.forEach((item) => {
    totalAmount += item.price * item.quantity;
  });
  const length = cart.length === 0;

  const states = [
    "Andhra Pradesh",
    "Arunanchal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
  ];

  const [differentAddress, setDifferentAddress] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [streetName, setStreetName] = useState("");
  const [apartmentName, setApartmentName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [diffFirstName, setDiffFirstName] = useState("");
  const [diffLastName, setDiffLastName] = useState("");
  const [diffCompanyName, setDiffCompanyName] = useState("");
  const [diffStreetName, setDiffStreetName] = useState("");
  const [diffApartmentName, setDiffApartmentName] = useState("");
  const [diffCity, setDiffCity] = useState("");
  const [diffState, setDiffState] = useState("");
  const [diffPinCode, setDiffPinCode] = useState("");
  const [orderNote, setOrderNote] = useState("");
  const [subTotal, setSubTotal] = useState("");
  const [total, setTotal] = useState("");

  function checkbox() {
    setDifferentAddress(!differentAddress);
  }

  function onLoad() {
    setSubTotal(totalAmount);
    setTotal(totalAmount);
  }
  useEffect(() => {
    onLoad();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    await axiosClient.post("/order/", {
      firstName,
      lastName,
      companyName,
      streetName,
      apartmentName,
      city,
      state,
      pinCode,
      phone,
      email,
      subTotal,
      total,
      diffFirstName,
      diffLastName,
      diffCompanyName,
      diffStreetName,
      diffApartmentName,
      diffCity,
      diffState,
      diffPinCode,
      orderNote,
    });
  }

  return (
    <>
      {!length && (
        <>
          <div className="checkout">
            <h1>CHECKOUT</h1>
            <div className="horizontal"></div>
            <h3>Billing Details</h3>
            <form onSubmit={handleSubmit}>
              <div className="form">
                <div className="firstPart">
                  <div className="name">
                    <div className="detail">
                      <label htmlFor="firstName" aria-required>
                        First name <span>*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="inputName"
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                    <div className="detail">
                      <label htmlFor="lastName" aria-required>
                        Last name <span>*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="inputName"
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="detail">
                    <label htmlFor="companyName">Company Name (optional)</label>
                    <input
                      type="text"
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
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
                      onChange={(e) => setStreetName(e.target.value)}
                    />
                    <input
                      id="streetAddress"
                      type="text"
                      placeholder="Apartment, suite, unit, etc.(optional)"
                      onChange={(e) => setApartmentName(e.target.value)}
                    />
                  </div>
                  <div className="detail">
                    <label htmlFor="townOrCity" aria-required>
                      Town / City <span>*</span>
                    </label>
                    <input
                      id="townOrCity"
                      type="text"
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                  <div className="detail">
                    <label htmlFor="state" aria-required>
                      State <span>*</span>
                    </label>
                    <select
                      name=""
                      id="state"
                      onChange={(e) => setState(e.target.value)}
                    >
                      {states.map((state) => (
                        <option value={state}>{state}</option>
                      ))}
                    </select>
                  </div>
                  <div className="detail">
                    <label htmlFor="pinCode" aria-required>
                      PIN Code <span>*</span>
                    </label>
                    <input
                      id="pinCode"
                      type="number"
                      onChange={(e) => setPinCode(e.target.value)}
                    />
                  </div>
                  <div className="detail">
                    <label htmlFor="phone" aria-required>
                      Phone <span>*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="detail">
                    <label htmlFor="email" aria-required>
                      Email Address <span>*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="secondPart">
                  <div className="checkbox">
                    <input type="checkbox" onChange={checkbox} />
                    <label id="checkbox" htmlFor="checkbox">
                      Ship to a different address?
                    </label>
                  </div>
                  {differentAddress && (
                    <div className="additionalAddress">
                      <div className="name">
                        <div className="detail">
                          <label htmlFor="firstName" aria-required>
                            First name <span>*</span>
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            className="inputName"
                            onChange={(e) => setDiffFirstName(e.target.value)}
                          />
                        </div>
                        <div className="detail">
                          <label htmlFor="lastName" aria-required>
                            Last name <span>*</span>
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            className="inputName"
                            onChange={(e) => setDiffLastName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="detail">
                        <label htmlFor="companyName">
                          Company Name (optional)
                        </label>
                        <input
                          type="text"
                          onChange={(e) => setDiffCompanyName(e.target.value)}
                        />
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
                          onChange={(e) => setDiffStreetName(e.target.value)}
                        />
                        <input
                          id="streetAddress"
                          type="text"
                          placeholder="Apartment, suite, unit, etc.(optional)"
                          onChange={(e) => setDiffApartmentName(e.target.value)}
                        />
                      </div>
                      <div className="detail">
                        <label htmlFor="townOrCity" aria-required>
                          Town / City <span>*</span>
                        </label>
                        <input
                          id="townOrCity"
                          type="text"
                          onChange={(e) => setDiffCity(e.target.value)}
                        />
                      </div>
                      <div className="detail">
                        <label htmlFor="state" aria-required>
                          State <span>*</span>
                        </label>
                        <select
                          name="state"
                          id="state"
                          onChange={(e) => setDiffState(e.target.value)}
                        >
                          {states.map((state) => {
                            return <option value={state}>{state}</option>;
                          })}
                        </select>
                      </div>
                      <div className="detail">
                        <label htmlFor="pinCode" aria-required>
                          PIN Code <span>*</span>
                        </label>
                        <input
                          id="pinCode"
                          type="number"
                          onChange={(e) => setDiffPinCode(e.target.value)}
                        />
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
                      onChange={(e) => setOrderNote(e.target.value)}
                    ></textarea>
                  </div>

                  <input type="submit" className="submit" />
                </div>
              </div>
            </form>
          </div>

          <Table />
        </>
      )}
      {length && (
        <div className="length">
          <h1>Checkout</h1>
          <p>Sorry! Can't checkout while cart is empty.</p>
        </div>
      )}
    </>
  );
}

export default Checkout;
