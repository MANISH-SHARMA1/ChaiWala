import React from "react";
import "./Journey.scss";
import journey from "../../Assets/assets/our_journey.gif.crdownload";

function Journey({data}) {
  return (
    <>
      <div className="journey">
        <h1>
          {data?.title}
        </h1>
        <div className="container"></div>
        <img src={data?.imgUrl} alt="journey img" />
      </div>
    </>
  );
}

export default Journey;
