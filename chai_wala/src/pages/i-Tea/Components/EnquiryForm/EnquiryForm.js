import React, { useState } from "react";
import "./EnquiryForm.scss";
import { axiosClient } from "../../../../utils/axiosClient";

function EnquiryForm() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [alternateContactNumber, setAlternateContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState("");
  const [annualTurnover, setAnnualTurnover] = useState("");
  const [capitalEmployed, setCapitalEmployed] = useState("");
  const [businessDetail, setBusinessDetail] = useState("");
  const [vantage, setVantage] = useState("");
  const [businessLocation, setBusinessLocation] = useState("");
  const [businessIndustry, setBusinessIndustry] = useState("");
  const [godown, setGodown] = useState("");
  const [technicalFacilities, setTechnicalFacilities] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await axiosClient.post("/distributorship/", {
      name,
      address,
      contactNumber,
      alternateContactNumber,
      email,
      experience,
      annualTurnover,
      capitalEmployed,
      businessDetail,
      vantage,
      businessLocation,
      businessIndustry,
      godown,
      technicalFacilities,
    });
  }
  return (
    <>
      <div className="enquiry">
        <h1>
          Enquiry For <span>i-Tea Distributorship</span>
        </h1>
        <form onSubmit={handleSubmit} className="form">
          <div className="formOne">
            <label className="boxOne " htmlFor="name">
              Name of the Applicant Distributor
            </label>
            <input
              className="boxOne input bigInput"
              type="text"
              id="name"
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
            />
            <label className="boxOne" htmlFor="address">
              Permanent Address
            </label>
            <input
              className="boxOne input"
              type="text"
              id="address"
              placeholder="Permanent Address"
              onChange={(e) => setAddress(e.target.value)}
            />
            <label className="boxOne" htmlFor="contact">
              Contact Number
            </label>
            <input
              className="boxOne input"
              type="number"
              id="contact"
              placeholder="+91-**********"
              onChange={(e) => setContactNumber(e.target.value)}
            />
            <label className="boxOne" htmlFor="alternateContact">
              Alternate Contact Number
            </label>
            <input
              className="boxOne input"
              type="number"
              id="alternateContact"
              placeholder="+91-**********"
              onChange={(e) => setAlternateContactNumber(e.target.value)}
            />
            <label className="boxOne" htmlFor="email">
              Email Address
            </label>
            <input
              className="boxOne input"
              type="email"
              id="email"
              placeholder="abc@xyz.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="boxOne" htmlFor="type">
              Type of Business
            </label>
            <input type="checkbox" id="Proprietorship" />
            <label htmlFor="Pro inputprietorship">Proprietorship</label>
            <input type="checkbox" id="Partnership" />
            <label htmlFor="par inputtnership">Partnership</label>

            <label className="boxOne" htmlFor="experience">
              Years of experience running a <br />
              business
            </label>
            <input
              className="boxOne input"
              type="text"
              id="experience"
              placeholder="experience"
              onChange={(e) => setExperience(e.target.value)}
            />
            <label className="boxOne" htmlFor="turnover">
              Annual Turnover (in Rs. Lacs)
            </label>
            <input
              className="boxOne input"
              type="text"
              id="turnover"
              placeholder="Annual Turnover"
              onChange={(e) => setAnnualTurnover(e.target.value)}
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
              onChange={(e) => setCapitalEmployed(e.target.value)}
            />
            <label className="boxTwo" htmlFor="businessDetail">
              Details of Business(Services offered/Products marketed)
            </label>
            <input
              className="boxTwo input bigInput"
              type="text"
              id="businessDetail"
              placeholder="Details of Business"
              onChange={(e) => setBusinessDetail(e.target.value)}
            />
            <label className="boxTwo" htmlFor="vantage">
              Business Vantage
            </label>
            <input
              className="boxTwo input"
              type="text"
              id="vantage"
              placeholder="Businesss Vantage"
              onChange={(e) => setVantage(e.target.value)}
            />
            <label className="boxTwo" htmlFor="location">
              Location of Business
            </label>
            <input
              className="boxTwo input"
              type="text"
              id="location"
              placeholder="Location of Business"
              onChange={(e) => setBusinessLocation(e.target.value)}
            />
            <label className="boxTwo" htmlFor="industry">
              Industry of Business
            </label>
            <input
              className="boxTwo input"
              type="text"
              id="industry"
              placeholder="Industry of Business"
              onChange={(e) => setBusinessIndustry(e.target.value)}
            />
            <label className="boxTwo" htmlFor="warehouse">
              Area of Warehouse/Godown
            </label>
            <input
              className="boxTwo input"
              type="text"
              id="warehouse"
              placeholder="****SQFT"
              onChange={(e) => setGodown(e.target.value)}
            />
            <label className="boxTwo" htmlFor="facilities">
              Technical Facilities Available
            </label>
            <input
              className="boxTwo input"
              type="text"
              id="facilities"
              placeholder="e.g. Computer, WiFi, etc."
              onChange={(e) => setTechnicalFacilities(e.target.value)}
            />
          </div>
          <div className="thirdBox">
            <input className="button" type="Submit" />
          </div>
        </form>
      </div>
    </>
  );
}

export default EnquiryForm;
