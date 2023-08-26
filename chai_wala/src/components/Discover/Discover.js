import React from "react";
import "./Discover.scss";
import scooty from "../../Assets/assets/DISC.png.crdownload";
import zomato from "../../Assets/assets/Zomato_button-jpg.webp.crdownload";
import swiggy from "../../Assets/assets/Swiggy_button-jpg.webp.crdownload";

function Discover({data}) {
  return (
    <>
      <div className="discover">
        <h1>{data?.title}</h1>
        <div className="horizontal"></div>
        <h4>{data?.subTitle}</h4>
        <img src={data?.imgUrl} alt="" />
      </div>

      <div className="treat">
        <div className="Treat">
          <img src={scooty} alt="" />
        </div>
        <div className="Treat treet">
          <h1>Here's a treat for your</h1>
          <h1>taste buds!</h1>
          <h1>Feeling too lazy to step</h1>
          <h1>out?</h1>
          <h1>Sit back and Relax!</h1>
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
