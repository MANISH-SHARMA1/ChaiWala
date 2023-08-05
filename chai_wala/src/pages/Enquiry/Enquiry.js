import React from "react";
import "./Enquiry.scss";
import map from "../../Assets/assets/map.png";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import CafeModels from "../../components/Models/CafeModels";

function Enquiry() {
  return (
    <>
      <Form />

      <div className="brandPartners">
        <div className="brand">
          <img src={map} alt="mapImg" />
        </div>
        <div className="brand">
          <div className="Brand">
            <h4>Our Valued</h4>
            <h1>Brand Partners</h1>
            <h5>Fueling Growth and Success</h5>
            <div className="horizontal"></div>
            <p>
              At <span>MBA CHAI WALA PVT. LTD.,</span> we are committed to
              fostering mutually beneficial partnerships. We are dedicated to
              nurturing these partnerships with a strong focus on growth and
              success. With our unwavering commitment to quality, we strive to
              create an environment that empowers our brand partners to thrive.
              We are excited about the opportunities that lie ahead and look
              forward to reaching new heights. Together, we will drive positive
              outcomes and create exceptional experiences for our valued
              customers.
            </p>
          </div>
        </div>
      </div>
      <CafeModels />
      <Footer />
    </>
  );
}

export default Enquiry;
