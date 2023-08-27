import React from "react";
import "./YtFeed.scss";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import karishma from "../../Assets/YtFeed/karishma.webp.crdownload";
import gadkari from "../../Assets/YtFeed/gadkari.webp.crdownload";
import bts from "../../Assets/YtFeed/bts.webp.crdownload";
import washington from "../../Assets/YtFeed/washington.webp.crdownload";
import joshtalk from "../../Assets/YtFeed/joshTalk.webp.crdownload";
import ted from "../../Assets/YtFeed/tedx.webp.crdownload";
import richa from "../../Assets/YtFeed/richa.webp.crdownload";
import sandeep from "../../Assets/YtFeed/sandeep.webp.crdownload";
import ranvir from "../../Assets/YtFeed/ranbir.webp.crdownload";

const divStyle = {
  display: "flex",
  backgroundSize: "cover",
  height: "400px",
};

const slideImages = [
  karishma,
  gadkari,
  bts,
  washington,
  joshtalk,
  ted,
  richa,
  sandeep,
  ranvir,
];
function YtFeed() {
  return (
    <>
      <div className="feed">
        <h1>Youtube Feeds</h1>
        <div className="horizontal"></div>
        <div className="slide-container">
          <Slide>
            {slideImages.map((slideImage, index) => (
              <div key={index}>
                <div
                  className="divStyle"
                  style={{
                    ...divStyle,
                    backgroundImage: `url(${slideImage})`,
                    height: "100vh",
                  }}
                ></div>
              </div>
            ))}
          </Slide>
        </div>
      </div>
    </>
  );
}

export default YtFeed;
