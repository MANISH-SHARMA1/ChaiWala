import React from "react";
import "./OurStory.scss";
import logo from "../../Assets/assets/mba-chai-wala-logo.png.crdownload";

function OurStory({ data }) {
  return (
    <>
      <div className="story">
        <div className="Story">
          <h1>{data?.title}</h1>
          <p>{data?.description}</p>
        </div>
        <div className="Story">
          <img src={logo} alt="logoImg" />
        </div>
      </div>
    </>
  );
}

export default OurStory;
