import React from "react";
import "./Journey.scss";
import journey from "../../Assets/assets/our_journey.gif.crdownload";

function Journey() {
  return (
    <>
      <div className="journey">
        <h1>
          <span>OUR</span> JOURNEY
        </h1>
        <div className="container"></div>
        <img src={journey} alt="journey img" />
      </div>
    </>
  );
}

export default Journey;
