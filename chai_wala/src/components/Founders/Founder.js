import React from "react";
import prafful from "../../Assets/assets/Prafull-Sir-copy-1.webp";
import "./Founder.scss";
function Founder() {
  return (
    <>
      <div className="founder">
        <div className="Founder">
          <img src={prafful} alt="praffulImg" />
        </div>
        <div className="Founder Desc">
          <h1>MR. PRAFULL BILLORE</h1>
          <h3>Founder MBA CHAI WALA PVT. LTD.</h3>
          <div className="horizontal"></div>
          <p>
            <span>Mr. Prafull Billore,</span> the Founder of{" "}
            <span>MBA CHAI WALA PVT. LTD.</span> is an icon among the youth of
            the nation. His unwavering determination and ambitious spirit have
            propelled him to represent India on both national and international
            platforms. <br /> <br /> He faced numerous challenges and overcame hurdles with
            persistent effort and hard work, undeterred by any setback, he
            turned his passion towards entrepreneurship and established a small
            tea stall that has now become the iconic MBA CHAI WALA, representing{" "}
            <span>Mr. Prafull Billore’s</span> vision for progress. <br /> <br />With the
            mantra{" "}
            <span className="highlight">
              “Har Ghar Start-up, Ghar Ghar Start-up,”
            </span>{" "}
            <span>Mr. Prafull Billore</span>
            envisions cultivating a mindset driven by dreams and ambitions. Mr.
            Prafull Billore’s vision is to inspire and stimulate a
            growth-oriented mindset among the people of our nation. We believe
            that tea can be an avenue for productive discussions, strategic
            planning, and ambitious pursuits, driving the advancement of our
            society. <br /> <br /> With unwavering commitment and the support of his brother
            and Co-Founder, <span>
              Mr. Vivek Billore, Mr. Prafull Billore
            </span>{" "}
            has tirelessly worked day and night to establish{" "}
            <span>MBA CHAI WALA PVT. LTD.,</span> the most iconic chai chain in
            India. Through our efforts to change the perception of chai to one
            of inspiration, we strive to make a meaningful impact and exude an
            aura of progress & growth.
          </p>
        </div>
      </div>
    </>
  );
}

export default Founder;
