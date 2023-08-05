import React from "react";
import "./AboutUs.scss";
import mbaAbout from "../../Assets/assets/mbaAbout.webp";
import Footer from "../../components/Footer/Footer";
import AboutDesc from "../../components/AboutDesc/AboutDesc";
import Bonding from "../../components/Bonding/Bonding";

function AboutUs() {
  return (
    <>
      <div className="about">
        <img src={mbaAbout} alt="mbaAbout" />
        <Bonding/>
        <AboutDesc />
        <Footer />
      </div>
    </>
  );
}

export default AboutUs;
