import React from "react";
import "./Bonding.scss";
import cupMba from "../../Assets/assets/cupMba.png";

function Bonding() {
  return (
    <>
      <div className="bonding">
        <h2>
          <span>100+</span> Outlets
        </h2>
        <img src={cupMba} alt="cupImg" />
        <h2>
          <span>100+</span> Brand Partners
        </h2>
      </div>
    </>
  );
}

export default Bonding;
