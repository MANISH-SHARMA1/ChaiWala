import React from "react";
import "./CafeModels.scss";
import HighwayModel from "../../Assets/assets/HighwayModel.jpg";
import LoungeModel from "../../Assets/assets/LoungeModel.webp";

function CafeModels() {
  return (
    <>
      <div className="cafe">
        <h1>OUR CAFE MODELS</h1>
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

export default CafeModels;
