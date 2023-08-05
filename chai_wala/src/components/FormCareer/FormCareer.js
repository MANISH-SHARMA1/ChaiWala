import React from "react";
import "./FormCareer.scss";

function FormCareer() {
  return (
    <>
      <div className="formpage">
        <h1>JOIN MBA CHAI WALA PARIVAR</h1>
        <div className="horizontal"></div>
        <div className="form">
          <div className="Box">
            <label className="labelFirst" htmlFor="name">
              Your Name
            </label>
            <input
              className="input"
              type="text"
              id="name"
              placeholder="Full Name"
            />
            <label className="labelFirst" htmlFor="contact">
              Contact No.
            </label>
            <input
              className="input"
              type="phone"
              id="contact"
              placeholder="Contact No."
            />
            <label className="labelFirst" htmlFor="profile">
              Profile
            </label>
            <input
              className="input"
              type="text"
              id="profile"
              placeholder="Profile"
            />
            <label className="labelFirst" htmlFor="city">
              City
            </label>
            <input className="input" type="text" id="city" placeholder="City" />
            <label className="labelFirst" htmlFor="jobDescription">
              Job Description
            </label>
            <input
              type="checkbox"
              id="fullTime"
              name="fullTime"
              value="fullTime"
            />
            <label htmlFor="fullTime">Full Time</label>
            <input
              type="checkbox"
              id="partTime"
              name="partTime"
              value="partTime"
            />
            <label htmlFor="partTime">Part Time</label>
            <input
              type="checkbox"
              id="Internship"
              name="Internship"
              value="Internship"
            />
            <label htmlFor="Internship">Internship</label>
          </div>

          <div className="Box box">
            <label className="labelSecond" htmlFor="email">
              Your Email
            </label>
            <input
              className="input"
              type="email"
              id="email"
              placeholder="Your Email"
            />
            <label className="labelSecond" htmlFor="qualification">
              Qualification
            </label>
            <input
              className="input"
              type="text"
              id="qualification"
              placeholder="Qualification"
            />
            <label className="labelSecond" htmlFor="experience">
              Experience
            </label>
            <input
              className="input"
              type="text"
              id="experience"
              placeholder="Experience"
            />
            <label className="labelSecond" htmlFor="state">
              State
            </label>
            <input
              className="input"
              type="text"
              id="state"
              placeholder="State"
            />
            <label className="labelSecond" htmlFor="resume">
              Resume
            </label>
            <input className="input" type="file" id="resume" name="resume" />
          </div>
          <div className="thirdBox">
            <input className="button" type="button" value="Submit" />
          </div>
        </div>
      </div>
    </>
  );
}

export default FormCareer;
