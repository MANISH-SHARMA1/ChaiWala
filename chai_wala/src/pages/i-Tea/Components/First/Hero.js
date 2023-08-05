import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import iTeaOne from "../../../../Assets/iTea/i-Tea1.webp";
import iTeaTwo from "../../../../Assets/iTea/i-Tea2.webp";
import iTeaThree from "../../../../Assets/iTea/i-Tea3.webp";
import iTeaFour from "../../../../Assets/iTea/i-Tea4.webp";
import iTeaFive from "../../../../Assets/iTea/i-Tea5.webp";
import iTeaSix from "../../../../Assets/iTea/i-Tea6.webp";

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
};

const slideImages = [iTeaOne, iTeaTwo, iTeaThree, iTeaFour, iTeaFive, iTeaSix];
function Hero() {
  return (
    <>
      <div className="slide-container" style={{ paddingTop: "9vh" }}>
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div
                className="divStyle"
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage})`,
                  height: "90vh",
                }}
              ></div>
            </div>
          ))}
        </Slide>
      </div>
    </>
  );
}

export default Hero;
