import React from "react";
import "./Models.scss";

function Models({ data }) {
  return (
    <>
      <div className="models">
        <h6>{data?.title}</h6>
        <h1>{data?.subTitle}</h1>
        <div className="horizontal"></div>
        <div className="img">
          <img src={data?.imgUrl} alt="Highway Model" />
          <div className="desc">
            <h1>Highway Model</h1>
          </div>
          <h3>5000-8000+ SQFT</h3>
        </div>
        <div className="img">
          <img src={data?.description} alt="Lounge Model" />
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
