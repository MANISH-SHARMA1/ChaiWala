import React, { useState } from "react";
import "./EnquiryForm.scss";
import Footer from "../../../components/Footer/Footer";
import { axiosClient } from "../../../utils/axiosClient";

function EnquiryForm() {
  const countries = [
    "Afghanistan",
    "Armenia",
    "Aruba",
    "Bahamas",
    "Baharain",
    "Bangladesh",
    "Canada",
    "Chile",
    "China",
    "Columbia",
    "Cuba",
    "Denmark",
    "Domnica",
    "Finland",
    "Greece",
    "Greenland",
    "India",
    "Iraq",
    "Italy",
    "Jamaica",
    "Japan",
    "USA",
    "Peru",
    "Poland",
    "Portugal",
    "Qatar",
  ];
  const states = [
    "Arunanchal Pradesh",
    "Andhra Pradesh",
    "Delhi",
    "Gujrat",
    "Himachal Pradesh",
    "Jammu&Kashmir",
    "Madhya Pradesh",
    "Maharashtra",
    "Rajasthan",
    "Tamil Nadu",
    "Telenagana",
    "Uttar Pradesh",
    "Uttarakhand",
    "Punjab",
    "West Bengal",
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [investmentSize, setInvestmentSize] = useState("");
  const [occupation, setOccupation] = useState("");
  const [outlet, setOutlet] = useState("");
  const [age, setAge] = useState("");
  const [question, setQuestion] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await axiosClient.post("/enquiryForm/", {
      name,
      email,
      mobile,
      country,
      state,
      city,
      pinCode,
      investmentSize,
      occupation,
      outlet,
      age,
      question,
    });
  }
  return (
    <>
      <div className="enquiryForm">
        <h1>Enquiry Form</h1>
        <div className="horizontal"></div>
        <div className="form" onSubmit={handleSubmit}>
          <form action="">
            <div className="raw">
              <div className="input">
                <label htmlFor="name">Name</label>
                <input type="text" onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="input">
                <label htmlFor="email">
                  Email <span>*</span>
                </label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="raw">
              <div className="input">
                <label htmlFor="mobile">
                  Mobile <span>*</span>
                </label>
                <input
                  type="phone"
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
              <div className="input">
                <label htmlFor="country">
                  Country <span>*</span>
                </label>
                <select
                  name="country"
                  id="country"
                  onChange={(e) => setCountry(e.target.value)}
                >
                  {countries.map((country) => {
                    return <option value={country}>{country}</option>;
                  })}
                </select>
              </div>
            </div>
            <div className="raw">
              <div className="input">
                <label htmlFor="state">
                  State <span>*</span>
                </label>
                <select
                  name="state"
                  id="state"
                  onChange={(e) => setState(e.target.value)}
                >
                  {states.map((state) => {
                    return <option value={state}>{state}</option>;
                  })}
                </select>
              </div>
              <div className="input">
                <label htmlFor="city">
                  City <span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter city name"
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
            </div>
            <div className="raw">
              <div className="input">
                <label htmlFor="pin">
                  Pin Code <span>*</span>
                </label>
                <input
                  type="number"
                  onChange={(e) => setPinCode(e.target.value)}
                />
              </div>
              <div className="input">
                <label htmlFor="investment">
                  Investment Size <span>*</span>
                </label>
                <select
                  name="investment"
                  id="investment"
                  onChange={(e) => setInvestmentSize(e.target.value)}
                >
                  <option value="select">---Select---</option>
                  <option value="20lacsTo25lacs">20 to 25 Lacs</option>
                  <option value="30lacsTo35lacs">30 to 35 Lacs</option>
                  <option value="MoreThan40Lacs">More than 40 Lacs</option>
                </select>
              </div>
            </div>
            <div className="raw">
              <div className="input">
                <label htmlFor="occupation">
                  Occupation <span>*</span>
                </label>
                <select
                  name="occupation"
                  id="occupation"
                  onChange={(e) => setOccupation(e.target.value)}
                >
                  <option value="select">--Select--</option>
                  <option value="student">Student</option>
                  <option value="job">Job</option>
                  <option value="business">Business</option>
                  <option value="selfEmployed">Self Employed</option>
                </select>
              </div>
              <div className="input">
                <label htmlFor="outlet">
                  Preferred Location for Outlet (City) <span>*</span>
                </label>
                <input
                  type="text"
                  onChange={(e) => setOutlet(e.target.value)}
                />
              </div>
            </div>
            <div className="raw">
              <div className="input">
                <label htmlFor="age">
                  Age <span>*</span>
                </label>
                <input type="text" onChange={(e) => setAge(e.target.value)} />
              </div>
              <div className="input">
                <label htmlFor="why">
                  Why MBA Chai Wala <span>*</span>
                </label>
                <input
                  type="text"
                  onChange={(e) => setQuestion(e.target.value)}
                />
              </div>
            </div>
            <div className="raw">
              <input type="submit" id="submit" />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EnquiryForm;
