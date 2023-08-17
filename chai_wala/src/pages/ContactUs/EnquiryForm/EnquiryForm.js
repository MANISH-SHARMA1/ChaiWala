import React from "react";
import "./EnquiryForm.scss";
import Footer from "../../../components/Footer/Footer";

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
  return (
    <>
      <div className="enquiryForm">
        <h1>Enquiry Form</h1>
        <div className="horizontal"></div>
        <div className="form">
          <form action="">
            <div className="raw">
              <div className="input">
                <label htmlFor="name">Name</label>
                <input type="text" />
              </div>
              <div className="input">
                <label htmlFor="email">
                  Email <span>*</span>
                </label>
                <input type="email" />
              </div>
            </div>
            <div className="raw">
              <div className="input">
                <label htmlFor="mobile">
                  Mobile <span>*</span>
                </label>
                <input type="phone" />
              </div>
              <div className="input">
                <label htmlFor="country">
                  Country <span>*</span>
                </label>
                <select name="country" id="country">
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
                <select name="state" id="state">
                  {states.map((state) => {
                    return <option value={state}>{state}</option>;
                  })}
                </select>
              </div>
              <div className="input">
                <label htmlFor="city">
                  City <span>*</span>
                </label>
                <input type="text" placeholder="Enter city name" />
              </div>
            </div>
            <div className="raw">
              <div className="input">
                <label htmlFor="pin">
                  Pin Code <span>*</span>
                </label>
                <input type="number" />
              </div>
              <div className="input">
                <label htmlFor="investment">
                  Investment Size <span>*</span>
                </label>
                <select name="investment" id="investment">
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
                <select name="occupation" id="occupation">
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
                <input type="text" />
              </div>
            </div>
            <div className="raw">
              <div className="input">
                <label htmlFor="age">
                  Age <span>*</span>
                </label>
                <input type="text" />
              </div>
              <div className="input">
                <label htmlFor="why">
                  Why MBA Chai Wala <span>*</span>
                </label>
                <input type="text" />
              </div>
            </div>
            <div className="raw">
              <input type="button" value="Submit" id="submit"/>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EnquiryForm;
