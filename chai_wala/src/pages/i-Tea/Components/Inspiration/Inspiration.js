import React from "react";
import "./Inspiration.scss";
import ElaichiTea from "../../../../Assets/iTea/iTea-Elaichi.jpg";
import PremiumTea from "../../../../Assets/iTea/mbaTea.webp";
import RegularTea from "../../../../Assets/iTea/i-Tea-Regular.webp";

function Inspiration() {
  const image = [
    { img: ElaichiTea, name: "i-Tea Cardamom", price: "₹160.00" },
    { img: PremiumTea, name: "i-Tea Premium", price: "₹130.00 - ₹495.00" },
    { img: RegularTea, name: "i-TEA Regular", price: "₹85.00 - ₹160.00" },
  ];
  return (
    <>
      <div className="inspiration">
        <h1 className="first">ARTISTRY OF</h1>
        <h1 className="second">i-NSPIRATION</h1>

        <iframe
          className="yt"
          width="1011"
          height="569"
          src="https://www.youtube.com/embed/4Bkdty4rQa0"
          title="Get ready to ignite your inspiration with i-TEA | MBA CHAI WALA"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>


      <div className="flavors">
        <h1>
          <span>FLAVORS OF</span> i-TEA
        </h1>
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
      </div>

    </>
  );
}

export default Inspiration;
