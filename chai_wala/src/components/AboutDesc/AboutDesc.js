import React from "react";
import "./AboutDesc.scss";

function AboutDesc({ data }) {
  return (
    <>
      <div className="aboutDesc">
        <h3>Welcome to</h3>
        <h1>MBA CHAI WALA!</h1>
        <h2>HAR GHAR STARTUP, GHAR GHAR STARTUP</h2>
        <p>{data[0]?.description}</p>
        <div className="img">
          <div>
            <img className="images" src={data[0]?.founderImg} alt="pbImg" />
            <img className="images" src={data[0]?.visionImg} alt="vision" />
          </div>
          <div>
            <img className="images" src={data[0]?.missionImg} alt="mission" />
            <img className="images" src={data[0]?.coFounderImg} alt="vbImg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutDesc;
