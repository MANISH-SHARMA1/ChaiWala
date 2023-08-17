import React from "react";
import "./AboutDesc.scss";
import prafful from "../../Assets/assets/prafful.png";
import vivek from "../../Assets/assets/vivek.png";
import vision from "../../Assets/assets/VISION-Thambnails-01-1.png";
import mission from "../../Assets/assets/MISSION-Thambnails-02-1.png";

function AboutDesc() {
  return (
    <>
      <div className="aboutDesc">
        <h3>Welcome to</h3>
        <h1>MBA CHAI WALA!</h1>
        <h2>HAR GHAR STARTUP, GHAR GHAR STARTUP</h2>
        <p>
          MBA CHAI WALA{" "}
          <span>
            is an Indian café chain, with the objective of creating a positive
            perception of tea as a catalyst for inspiration. We aim to dispel
            the misconception associated with tea as merely a beverage, by
            positioning it as a tool for discussions on business plans,
            strategizing a successful future with peers, and working towards
            achieving goals. We strive to make a meaningful impact on the lives
            of millions of people through the inspiration for progress.
          </span>
        </p>
        <div className="img">
          <div>
            <img className="images" src={prafful} alt="pbImg" />
            <img className="images" src={vision} alt="vision" />
          </div>
          <div>
            <img className="images" src={mission} alt="mission" />
            <img className="images" src={vivek} alt="vbImg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutDesc;
