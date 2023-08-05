import React from "react";
import "./TopStartups.scss";
import startups from "../../Assets/assets/topStartups.webp";

function TopStartups() {
  return (
    <>
      <div className="startups">
        <div className="container">
          <h1>100+</h1>
          <h5>Outlets Serving</h5>
        </div>
        <div className="container">
          <div className="img">
            <img src={startups} alt="topStartupsImg" />
          </div>
        </div>
        <div className="container">
          <h1>150+</h1>
          <h5>Brand Partners</h5>
        </div>
      </div>
    </>
  );
}

export default TopStartups;
