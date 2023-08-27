import React from "react";
import "./Journey.scss";

function Journey({ data }) {
  return (
    <>
      <div className="journey">
        <h1>{data?.title}</h1>
        <div className="container"></div>
        <img src={data?.imgUrl} alt="journey img" />
      </div>
    </>
  );
}

export default Journey;
