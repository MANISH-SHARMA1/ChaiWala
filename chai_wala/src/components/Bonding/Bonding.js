import React from "react";
import "./Bonding.scss";

function Bonding({ data }) {
  console.log(data[0]?.cupImg);

  return (
    <>
      <div className="bonding">
        <h2>
          <span>100+</span> Outlets
        </h2>
        <img src={data[0]?.cupImg} alt="cupImg" />
        <h2>
          <span>100+</span> Brand Partners
        </h2>
      </div>
    </>
  );
}

export default Bonding;
