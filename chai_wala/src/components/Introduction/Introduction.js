import React from "react";
import "./Introduction.scss";
import sttal from "../../Assets/assets/sttal-shadow.png";

function Introduction() {
  return (
    <>
      <div className="introduction">
        <div className="intro">
          <img src={sttal} alt="" />
        </div>
        <div className="intro Intro">
          <h4>INTRODUCING</h4>
          <h1>INDIA'S MOST</h1>
          <h1>ICONIC CHAI WALA</h1>
          <div className="horizontal"></div>
          <p>
            As a chain of cafes with a wide presence across various regions in
            India, our core objective is to reach millions of people and foster
            a growth-oriented mindset by instilling in them an understanding and
            appreciation for entrepreneurship, working for their ambitions and
            aspirations. Through our unique approach to positioning our brand to
            the people, we not only facilitate them in becoming business owners
            but also contribute to the creation of a positive mindset and build
            a progressive nation. <br />
            <br /> Our unwavering mission is to create a culture of
            entrepreneurial discussions over a cup of tea in our cafes, serving
            as a catalyst for working towards a progressive nation. With over
            100+ outlets strategically located across different parts of India,
            we are committed to surpassing our current achievements and making
            an even greater impact on the growth of the people.
          </p>
        </div>
      </div>
    </>
  );
}

export default Introduction;
