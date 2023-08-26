import React from "react";
import "./CoFounder.scss";

function CoFounder({ data }) {
  return (
    <>
      <div className="coFounder">
        <div className="cofounder vivek">
          <h1>{data?.title}</h1>
          <h3>{data?.subTitle}</h3>
          <div className="horizontal"></div>
          <p>{data?.description}</p>
        </div>
        <div className="cofounder">
          <img src={data?.imgUrl} alt="coFounderImg" />
        </div>
      </div>
    </>
  );
}

export default CoFounder;
