import React from "react";
import "./CoFounder.scss";
import coFounder from "../../Assets/assets/VB-Sir.png"

function CoFounder() {
  return (
    <>
      <div className="coFounder">
        <div className="cofounder vivek">
          <h1>MR. VIVEK BILLORE</h1>
          <h3>Co-Founder MBA CHAI WALA PVT. LTD.</h3>
          <div className="horizontal"></div>
          <p>
            <span>Mr. Vivek Billore,</span> the{" "}
            <span>Co-Founder of MBA CHAI WALA PVT. LTD., </span>is a visionary
            leader and a spiritual guru. His unwavering support and
            contributions have been pivotal in the success of{" "}
            <span>MBA CHAI WALA,</span> serving as the glue that holds the
            organization together. <br /><br />As an accomplished{" "}
            <span>
              Angel Investor, Spiritual Guru, and Public Speaker, Mr. Vivek
              Billore
            </span>{" "}
            has made significant strides in guiding individuals through his
            expertise in astrology, helping them understand the impact of
            planetary positioning on their lives. He is an inspiration to
            millions of people, encouraging them to pursue their dreams with
            zeal and determination. <br /><br /><span>Mr. Vivek Billore’s</span> passion for
            spreading the richness of our culture across the globe is evident in
            his
            <span>single-handed launch of “Riddhidev”.</span> A core goal of{" "}
            <span>Riddhidev</span> is to introduce and ignite curiosity among
            the people to learn more about our cultural heritage.{" "} <br /><br />
            <span>Mr. Vivek Billore</span> has worked diligently to grow
            <span>MBA CHAI WALA</span> and continuously strives to elevate to
            new heights. He has traversed a long path, navigating through
            obstacles and surmounting challenges with resilience and tenacity.
          </p>
        </div>
        <div className="cofounder">
          <img src={coFounder} alt="coFounderImg" />
        </div>
      </div>
    </>
  );
}

export default CoFounder;
