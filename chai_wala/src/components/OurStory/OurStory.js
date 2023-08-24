import React from "react";
import "./OurStory.scss";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import logo from "../../Assets/assets/mba-chai-wala-logo.png.crdownload";
import aajTak from "../../Assets/Featured/aaj-tak.png.crdownload";
import abp from "../..//Assets/Featured/abp-nes.png.crdownload";
import brut from "../..//Assets/Featured/Brut.png.crdownload";
import cnbc from "../..//Assets/Featured/cnbc.png.crdownload";
import economic from "../..//Assets/Featured/Economic.webp.crdownload";
import et from "../..//Assets/Featured/Et.png.crdownload";
import hindustan from "../..//Assets/Featured/Hindustan.webp.crdownload";
import hofindia from "../..//Assets/Featured/HofBombay.webp.crdownload";
import indiatv from "../..//Assets/Featured/India-TV.png.crdownload";
import logical from "../..//Assets/Featured/logical.png.crdownload";
import money from "../..//Assets/Featured/Money-Control.png.crdownload";
import ndtv from "../..//Assets/Featured/ndtv.webp.crdownload";
import sandeep from "../..//Assets/Featured/sandeep.png.crdownload";
import scoop from "../..//Assets/Featured/Scoop.png.crdownload";
import tedx from "../..//Assets/Featured/tedx.png.crdownload";
import zeenews from "../..//Assets/Featured/zeeNews.webp.crdownload";

function OurStory({data}) {
  const images = [
    aajTak,
    abp,
    brut,
    cnbc,
    economic,
    et,
    hindustan,
    hofindia,
    indiatv,
    logical,
    money,
    ndtv,
    sandeep,
    scoop,
    tedx,
    zeenews,
  ];
  return (
    <>
      <div className="story">
        <div className="Story">
          <h1>{data?.title}</h1>
          <p>{data?.description}
            {/* As a renowned Cafe chain with a widespread presence across various
            regions in India, our corporate mission is to foster and empower
            individuals with the ambition, aspirations, and inspiration to
            become successful entrepreneurs. We strive to make a meaningful
            impact by reaching out to millions of people and instilling in them
            an outlook to contribute to the development of a dynamic nation. */}
          </p>
          <div className="horizontal">
            <p>FEATURED IN</p>
          </div>
        </div>
        <div className="Story">
          <img src={logo} alt="logoImg" />
        </div>
        <Zoom scale={0.4}>
          {images.map((e, index) => (
            <img key={index} style={{ width: "10%" }} src={e} alt="img" />
          ))}
        </Zoom>
      </div>
    </>
  );
}

export default OurStory;
