import React from "react";
import "./Models.scss";
import HighwayModel from "../../Assets/assets/HighwayModel.jpg";
import LoungeModel from "../../Assets/assets/LoungeModel.webp";
function Models() {
  return (
    <>
      <div className="models">
        <h6>OUR</h6>
        <h1>CAFE MODELS</h1>
        <div className="horizontal"></div>
        <div className="img">
          <img src={HighwayModel} alt="Highway Model" />
          <div className="desc">
            <h1>Highway Model</h1>
          </div>
          <h3>5000-8000+ SQFT</h3>
        </div>
        <div className="img">
          <img src={LoungeModel} alt="Lounge Model" />
          <div className="desc">
            <h1>Lounge Model</h1>
          </div>

          <h3>1500+ SQFT</h3>
        </div>
      </div>
    </>
  );
}

export default Models;
