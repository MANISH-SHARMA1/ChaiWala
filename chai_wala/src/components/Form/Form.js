import React from "react";
import "./Form.scss";
import brand from "../../Assets/assets/Brand-aprtner.webp";

function Form() {
  return (
    <>
      <div className="fullPage">
        <div className="page">
          <img src={brand} alt="brandImg" />
          <div className="Form">
            <h1>ENQUIRY FORM</h1>
            <div className="horizontal"></div>
            <h3>Let Us Know More About You!</h3>

            <form onSubmit="" className="form">
              <div className="padding">
                <label htmlFor="name">Your Name</label>
                <input
                  className=" input"
                  type="text"
                  id="name"
                  placeholder="Jhon Doe"
                />
              </div>
              <div className="box">
                <div className="padding">
                  <label htmlFor="email">Your Email</label>
                  <input
                    className="input"
                    type="mail"
                    id="email"
                    placeholder="abcd@xyz.com"
                  />
                </div>
                <div className="padding">
                  <label id="contact" htmlFor="contact">
                    Contact No.
                  </label>
                  <input
                    className=" input"
                    type="phone"
                    id="contact"
                    placeholder="+91-**********"
                  />
                </div>
              </div>
              <div className="box">
                <div className="padding">
                  <label id="select" htmlFor="investment">
                    Investment Size?
                  </label>
                  <select
                    className=" input select"
                    name=""
                    id="investment, select"
                  >
                    <option value="" selected>
                      Select
                    </option>
                    <option value="15 to 20 Lacs">15 to 20 Lacs</option>
                    <option value="20 to 25 Lacs">20 to 25 Lacs</option>
                    <option value="25 to 30 Lacs">25 to 30 Lacs</option>
                    <option value="More than 40 Lacs">More than 40 Lacs</option>
                  </select>
                </div>
                <div className="padding">
                  <label id="select" className="" htmlFor="occupation">
                    Occupation
                  </label>
                  <select
                    className=" input select"
                    name=""
                    id="occupation select"
                  >
                    <option value="" selected>
                      Select
                    </option>
                    <option value="Student">Student</option>
                    <option value="Job">Job</option>
                    <option value="Business">Business</option>
                    <option value="self Employed">Self Employed</option>
                  </select>
                </div>
                <div className="padding">
                  <label htmlFor="age">Age</label>
                  <input
                    className=" input"
                    type="number"
                    id="age"
                    placeholder="Age"
                  />
                </div>
              </div>
              <div className="box">
                <div className="padding ">
                  <label htmlFor="city">City</label>
                  <input
                    className=" input code"
                    type="text"
                    id="city"
                    placeholder="City"
                  />
                </div>

                <div className="padding">
                  <label htmlFor="state">State</label>
                  <select className=" input select" name="" id="state">
                    <option value="" selected>
                      Select
                    </option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunanchal Pradesh">
                      Arunanchal Pradesh
                    </option>
                    <option value="Gujrat">Gujrat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangna">Telangna</option>
                  </select>
                </div>
                <div className="padding">
                  <label htmlFor="pinCode">Pin-Code</label>
                  <input
                    className="input code"
                    type="number"
                    id="pinCode"
                    placeholder="Pin Code"
                  />
                </div>
              </div>
              <div className="padding">
                <label htmlFor="question">Why MBA Chai Wala?</label>
                <textarea name="" id="question"></textarea>
              </div>
              <input className=" submit padding" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
