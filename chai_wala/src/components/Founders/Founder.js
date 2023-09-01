import React from "react";
import "./Founder.scss";

function Founder({ data }) {
  return (
    <>
      <div className="founder">
        <div className="Founder">
          <img src={data?.imgUrl} alt="praffulImg" />
        </div>
        <div className="Founder Desc">
          <h1>{data?.title}</h1>
          <h3>{data?.subTitle}</h3>
          <div className="horizontal"></div>
          <p>{data?.description}</p>
        </div>
      </div>
    </>
  );
}

export default Founder;
