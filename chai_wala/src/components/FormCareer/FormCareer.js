import React, { useState } from "react";
import "./FormCareer.scss";
import { axiosClient } from "../../utils/axiosClient";

function FormCareer() {
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [profile, setProfile] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [qualification, setQualification] = useState("");
  const [experience, setExperience] = useState("");
  const [state, setState] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const data = await axiosClient.post("/career/", {
        name,
        email,
        contactNumber,
        qualification,
        profile,
        experience,
        city,
        state,
      });

      console.log("data: ", data);
    } catch (error) {
      console.log("error: ", error);
    }
  }
  return (
    <>
      <div className="formpage">
        <h1>JOIN MBA CHAI WALA PARIVAR</h1>
        <div className="horizontal"></div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="Box">
              <label className="labelFirst" htmlFor="name">
                Your Name
              </label>
              <input
                className="input"
                type="text"
                id="name"
                placeholder="Full Name"
                onChange={(e) => setName(e.target.value)}
              />
              <label className="labelFirst" htmlFor="contact">
                Contact No.
              </label>
              <input
                className="input "
                type="phone"
                id="contact"
                placeholder="Contact No."
                onChange={(e) => setContactNumber(e.target.value)}
              />
              <label className="labelFirst" htmlFor="profile">
                Profile
              </label>
              <input
                className="input"
                type="text"
                id="profile"
                placeholder="Profile"
                onChange={(e) => setProfile(e.target.value)}
              />
              <label className="labelFirst" htmlFor="city">
                City
              </label>
              <input
                className="input"
                type="text"
                id="city"
                placeholder="City"
                onChange={(e) => setCity(e.target.value)}
              />
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
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="labelSecond" htmlFor="qualification">
                Qualification
              </label>
              <input
                className="input"
                type="text"
                id="qualification"
                placeholder="Qualification"
                onChange={(e) => setQualification(e.target.value)}
              />
              <label className="labelSecond" htmlFor="experience">
                Experience
              </label>
              <input
                className="input"
                type="text"
                id="experience"
                placeholder="Experience"
                onChange={(e) => setExperience(e.target.value)}
              />
              <label className="labelSecond" htmlFor="state">
                State
              </label>
              <input
                className="input"
                type="text"
                id="state"
                placeholder="State"
                onChange={(e) => setState(e.target.value)}
              />
              <label className="labelSecond" htmlFor="resume">
                Resume
              </label>
              <input className="input" type="file" id="resume" name="resume" />
            </div>
            <div className="thirdBox">
              <input className="button" type="Submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default FormCareer;
