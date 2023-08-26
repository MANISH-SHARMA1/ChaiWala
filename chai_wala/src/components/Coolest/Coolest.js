import React from "react";
import "./Coolest.scss";
function Coolest({ data }) {
  return (
    <>
      <div className="coolest">
        <div className="cool">
          <h1>{data?.title}</h1>
          <p>{data?.description}</p>
        </div>
        <div className="cool Cool">
          <img src={data?.imgUrl} alt="" />
        </div>
      </div>
    </>
  );
}

export default Coolest;
