import React from "react";
import "./Infused.scss";
import leaves from "../../../../Assets/iTea/TEA-LEAVS.gif.crdownload";

function Infused() {
  return (
    <>
      <div className="infused">
        <div className="border">
          <div className="Infused desc">
            <h1>i-TEA, INFUSED</h1>
            <h1>WITH</h1>
            <h1>INSPIRATION</h1>
            <p>
              Welcome to i-TEA, where inspiration meets the finest quality tea
              leaves! As a brand that prides itself on ethically sourcing our
              tea leaves, we are committed to providing you with the most
              exquisite tea experience while also promoting sustainable sourcing
              practices
            </p>
          </div>
          <div className="Infused">
            <img src={leaves} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Infused;
