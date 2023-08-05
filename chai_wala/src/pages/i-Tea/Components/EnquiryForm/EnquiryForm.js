import React from "react";
import "./EnquiryForm.scss";

function EnquiryForm() {
  return (
    <>
      <div className="enquiry">
        <h1>
          Enquiry For <span>i-Tea Distributorship</span>
        </h1>
        <form action="" className="form">
          <div className="formOne">
            <label className="boxOne " htmlFor="name">
              Name of the Applicant Distributor
            </label>
            <input
              className="boxOne input bigInput"
              type="text"
              id="name"
              placeholder="Full Name"
            />
            <label className="boxOne" htmlFor="address">
              Permanent Address
            </label>
            <input
              className="boxOne input"
              type="text"
              id="address"
              placeholder="Permanent Address"
            />
            <label className="boxOne" htmlFor="contact">
              Contact Number
            </label>
            <input
              className="boxOne input"
              type="number"
              id="contact"
              placeholder="+91-**********"
            />
            <label className="boxOne" htmlFor="alternateContact">
              Alternate Contact Number
            </label>
            <input
              className="boxOne input"
              type="number"
              id="alternateContact"
              placeholder="+91-**********"
            />
            <label className="boxOne" htmlFor="email">
              Email Address
            </label>
            <input
              className="boxOne input"
              type="email"
              id="email"
              placeholder="abc@xyz.com"
            />
            <label className="boxOne" htmlFor="type">
              Type of Business
            </label>
            <input type="checkbox" id="Proprietorship" />
            <label htmlFor="Pro inputprietorship">Proprietorship</label>
            <input type="checkbox" id="Partnership" />
            <label htmlFor="par inputtnership">Partnership</label>

            <label className="boxOne" htmlFor="experience">
              Years of experience running a <br />business
            </label>
            <input
              className="boxOne input"
              type="text"
              id="experience"
              placeholder="experience"
            />
            <label className="boxOne" htmlFor="turnover">
              Annual Turnover (in Rs. Lacs)
            </label>
            <input
              className="boxOne input"
              type="text"
              id="turnover"
              placeholder="Annual Turnover"
            />
          </div>
          <div className="formOne formTwo">
            <label className="boxTwo " htmlFor="capital">
              Capital to be Employed for Distributorship (in Rs. Lacs)
            </label>
            <input
              className="boxTwo input bigInput"
              type="text"
              id="capital"
              placeholder="Capital to be Employed for Distributorship"
            />
            <label className="boxTwo" htmlFor="businessDetail">
              Details of Business(Services offered/Products marketed)
            </label>
            <input
              className="boxTwo input bigInput"
              type="text"
              id="businessDetail"
              placeholder="Details of Business"
            />
            <label className="boxTwo" htmlFor="vantage">
              Business Vantage
            </label>
            <input
              className="boxTwo input"
              type="text"
              id="vantage"
              placeholder="Businesss Vantage"
            />
            <label className="boxTwo" htmlFor="location">
              Location of Business
            </label>
            <input
              className="boxTwo input"
              type="text"
              id="location"
              placeholder="Location of Business"
            />
            <label className="boxTwo" htmlFor="industry">
              Industry of Business
            </label>
            <input
              className="boxTwo input"
              type="text"
              id="industry"
              placeholder="Industry of Business"
            />
            <label className="boxTwo" htmlFor="warehouse">
              Area of Warehouse/Godown
            </label>
            <input
              className="boxTwo input"
              type="text"
              id="warehouse"
              placeholder="****SQFT"
            />
            <label className="boxTwo" htmlFor="facilities">
              Technical Facilities Available
            </label>
            <input
              className="boxTwo input"
              type="text"
              id="facilities"
              placeholder="e.g. Computer, WiFi, etc."
            />
          </div>
          <div className="thirdBox">
            <input className="button" type="button" value="Submit" />
          </div>
        </form>
      </div>
    </>
  );
}

export default EnquiryForm;
