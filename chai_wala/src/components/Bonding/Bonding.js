import React from "react";
import "./Bonding.scss";
import cupMba from "../../Assets/assets/cupMba.png";

function Bonding() {
  return (
    <>
      <div className="bonding">
        <h2 className="bond">
          <span>100+</span> Outlets
        </h2>
        <img className="bond img" src={cupMba} alt="cupImg" />
        <h2 className="bond">
          <span>100+</span> Brand Partners
        </h2>
      </div>
    </>
  );
}

export default Bonding;
