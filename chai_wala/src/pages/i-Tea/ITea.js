import React from "react";
import "./ITea.scss";
import Hero from "./Components/First/Hero";
import Infused from "./Components/Infused/Infused";
import Inspiration from "./Components/Inspiration/Inspiration";
import Description from "./Components/Description/Description";
import EnquiryForm from "./Components/EnquiryForm/EnquiryForm";
import Footer from "../../components/Footer/Footer";

function ITea() {
  return (
    <>
      <div className="itea">
        <Hero />
        <Infused />
        <Inspiration />
        <Description />
        <EnquiryForm />
        <Footer />
      </div>
    </>
  );
}

export default ITea;
