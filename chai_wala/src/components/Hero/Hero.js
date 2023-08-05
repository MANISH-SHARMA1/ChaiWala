import React from "react";
import "./Hero.scss";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import firstSlide from "../../Assets/Hero/heroOne.webp";
import secondSlide from "../../Assets/Hero/heroTwo.webp";
import thirdSlide from "../../Assets/Hero/heroThree.webp";
import fourthSlide from "../../Assets/Hero/heroFour.webp";
import fifthSlide from "../../Assets/Hero/heroFive.webp";
import sixthSlide from "../../Assets/Hero/heroSix.webp";
import seventhSlide from "../../Assets/Hero/heroSeven.webp";
import eighthSlide from "../../Assets/Hero/heroEight.webp";
import ninthSlide from "../../Assets/Hero/heroNine.webp";

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
};
const slideImages = [
  firstSlide,
  secondSlide,
  thirdSlide,
  fourthSlide,
  fifthSlide,
  sixthSlide,
  seventhSlide,
  eighthSlide,
  ninthSlide,
];

function Hero() {
  return (
    <>
      <div className="slide-container">
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
