import React from "react";
import "./Discover.scss";
import discover from "../../Assets/assets/DISCover.png";
import scooty from "../../Assets/assets/DISC.png.crdownload";
import zomato from "../../Assets/assets/Zomato_button-jpg.webp.crdownload";
import swiggy from "../../Assets/assets/Swiggy_button-jpg.webp.crdownload";

function Discover() {
  return (
    <>
      <div className="discover">
        <h1>DISCOVER</h1>
        <div className="horizontal"></div>
        <h4>Our Recommended Menu</h4>
        <img src={discover} alt="" />
      </div>

      <div className="treat">
        <div className="Treat">
          <img src={scooty} alt="" />
        </div>
        <div className="Treat treet">
          <h1>
            Here's a treat for your taste buds! Feling too lazy to step out? Sit
            back and relax!
          </h1>

          <p>
            We are dedicated to satisfying your cravings with an extensive range
            of high-quality, delicious snacks and beverages. With our convenient
            delivery services, you can now enjoy delicious food delivered
            straight to your doorstep.
          </p>
          <div className="image">
            <img src={zomato} alt="zomatobtn" />
          </div>
          <div className="image img">
            <img src={swiggy} alt="swiggybtn" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Discover;
