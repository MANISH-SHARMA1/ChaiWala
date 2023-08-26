import React from "react";
import "./Introduction.scss";

function Introduction({ data }) {
  return (
    <>
      <div className="introduction">
        <div className="intro">
          <img src={data?.imgUrl} alt="" />
        </div>

        <div className="intro Intro">
          <h4>{data?.subTitle}</h4>
          <h1>{data?.title}</h1>
          <div className="horizontal"></div>
          <p>{data?.description}</p>
        </div>
      </div>
    </>
  );
}

export default Introduction;
