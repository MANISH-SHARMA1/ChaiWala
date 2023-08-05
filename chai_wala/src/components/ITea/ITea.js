import React from "react";
import "./ITea.scss";
import ElaichiTea from "../../Assets/iTea/iTea-Elaichi.jpg";
import PremiumTea from "../../Assets/iTea/mbaTea.webp";
import RegularTea from "../../Assets/iTea/i-Tea-Regular.webp";
function ITea() {
  const image = [
    { img: ElaichiTea, name: "i-Tea Cardamom", price: "₹160.00" },
    { img: PremiumTea, name: "i-Tea Premium", price: "₹130.00 - ₹495.00" },
    { img: RegularTea, name: "i-TEA Regular", price: "₹85.00 - ₹160.00" },
  ];
  return (
    <>
      <div className="tea">
        <h1>i-TEA</h1>
        <h6>By MBA CHAI WALA</h6>
        <div className="horizontal"></div>
        {image.map((e, index) => (
          <div
            key={index}
            className="imgContainer"
            style={{ backgroundImage: `url(${e.img})` }}
          >
            <div className="content">
              <h4 id="name">{e.name}</h4>
              <h4>{e.price}</h4>
              <p>Read more</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ITea;
