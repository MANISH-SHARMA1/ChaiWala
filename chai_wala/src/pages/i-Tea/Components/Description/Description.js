import React from "react";
import "./Description.scss";
import img from "../../../../Assets/iTea/TEA-BG-Vector.png";
import second from "../../../../Assets/iTea/MBA-CW-OUTLET-outline-01.png";
import leaf from "../../../../Assets/iTea/tea-leaf.png";

function Description() {
  return (
    <>
      <div className="description">
        <div className="descr DESC">
          <h1>INSPIRED BY </h1>
          <h1> NATURE, </h1>
          <h1> CRAFTED WITH </h1>
          <h1> CARE</h1>
          <p
            style={{
              backgroundImage: `url(${leaf})`,
              backgroundRepeat: "no-repeat",
              width: "250px",
              height: "250px",
            }}
          >
            Our teas are crafted with utmost care to preserve their natural
            flavors and aroma. From hand-picking the leaves to expertly blending
            them, every step of our tea-making process is infused with passion
            and dedication. Our teas are meticulously tested for quality and
            taste, ensuring that you receive only the finest tea in your cup.
          </p>
        </div>
        <div className="descr">
          <img src={img} alt="" />
        </div>
        <div className="about">
          <img src={second} alt="" />
        </div>
        <div className="about ABOUT">
          <h1>RETAIL PRESENCE</h1>
          <p
            style={{
              backgroundImage: `url(${leaf})`,
              backgroundRepeat: "no-repeat",
              width: "250px",
              height: "250px",
            }}
          >
            Inspired by our passion to deliver the ultimate tea experience,
            i-TEA has ventured into the retail markets. Visit MBA CHAI WALA and
            indulge in our exceptional tea blends. We are committed to
            delivering the highest standards of quality and innovation to our
            patrons. Experience our premium tea blends that are crafted with a
            focus on quality and infused with inspiration. Our promise is to
            deliver the highest level of customer service along with
            satisfaction and excellence in serving the best tea experience
            available.
          </p>
        </div>
      </div>
    </>
  );
}

export default Description;
