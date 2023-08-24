import React from "react";
import "./Coolest.scss";
import gif from "../../Assets/assets/Comp-1-min-1.gif.crdownload";
function Coolest({data}) {
  return (
    <>
      <div className="coolest">
        <div className="cool">
          <h1>{data?.title}</h1>
          {/* <h1 className="hOne">COOLEST CHAI WALA</h1>
          <h1>IN YOUR CITY</h1> */}
          <p>{data?.description}
            {/* <span>MBA CHAI WALA</span> began with one man who defied all
            challenges and obstacles. Over time, it has blossomed into a
            thriving community of over 100+ brand partners! <br />
            <br /> With more brand partners joining us every month, we’re
            growing at an exuberant rate. The most exciting aspect is that you
            too can join our family and grow together with us. */}
          </p>
        </div>
        <div className="cool Cool">
          <img src={data?.imgUrl} alt="" />
        </div>
      </div>
    </>
  );
}

export default Coolest;
