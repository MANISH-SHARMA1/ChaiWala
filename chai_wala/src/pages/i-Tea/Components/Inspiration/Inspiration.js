import React from "react";
import "./Inspiration.scss";
import ElaichiTea from "../../../../Assets/iTea/iTea-Elaichi.jpg";
import PremiumTea from "../../../../Assets/iTea/mbaTea.webp";
import RegularTea from "../../../../Assets/iTea/i-Tea-Regular.webp";
import { useNavigate } from "react-router";
import { axiosClient } from "../../../../utils/axiosClient";

function Inspiration() {
  const navigate = useNavigate();
  const image = [
    { img: ElaichiTea, name: "i-Tea Cardamom", price: "₹160.00", id: "1"},
    { img: PremiumTea, name: "i-Tea Premium", price: "₹130.00 - ₹495.00", id: "2" },
    { img: RegularTea, name: "i-TEA Regular", price: "₹85.00 - ₹160.00", id: "3" },
  ];
  axiosClient.get()
  return (
    <>
      <div className="inspiration">
        <h1 className="first">ARTISTRY OF</h1>
        <h1 className="second">i-NSPIRATION</h1>
        <div className="iframe">
          <iframe
            className="yt"
            src="https://www.youtube.com/embed/4Bkdty4rQa0"
            title="Get ready to ignite your inspiration with i-TEA | MBA CHAI WALA"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="flavors">
          <h1>
            <span>FLAVORS OF</span> i-TEA
          </h1>
          {image.map((e, index) => (
            <div
              key={index}
              className="imgContainer"
              style={{ backgroundImage: `url(${e.img})` }}
              onClick={() => {navigate(`/product/:${e.id}`)}}
            >
              <div className="content">
                <h4 id="name">{e.name}</h4>
                <h4>{e.price}</h4>
                <p >Read more</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Inspiration;
