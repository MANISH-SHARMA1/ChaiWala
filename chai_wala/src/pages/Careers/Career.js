import React from "react";
import "./Career.scss";
import FormCareer from "../../components/FormCareer/FormCareer";
import Footer from "../../components/Footer/Footer";

function Career() {
  return (
    <>
      <div className="careers">
        <div className="careerTop">
          <h2>WORK WITH US</h2>
          <h3>Take the next step of your career with</h3>
          <h1>MBA CHAI WALA</h1>
          <div className="horizontal"></div>
          <p>
            We are on a mission to foster a growth-oriented mindset. We are
            actively looking for someone whose vision is aligned with ours. If
            you are passionate about doing your best work, working on worthy
            projects, and having fun while doing it; then we might have just the
            right opportunity for you.
          </p>
        </div>
        <FormCareer />
        <Footer />
      </div>
    </>
  );
}

export default Career;
