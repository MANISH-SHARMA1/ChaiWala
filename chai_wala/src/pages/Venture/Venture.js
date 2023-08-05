import React from "react";
import "./Venture.scss";
import iTea from "../../Assets/assets/itea.png";
import Riddhidev from "../../Assets/assets/Ridhidev.png";
import DarkBeans from "../../Assets/assets/DarkBeans.png";
import Footer from "../../components/Footer/Footer";

function Venture() {
  return (
    <>
      <div className="venture">
        <div className="top">
          <h1>MBA CHAI WALA</h1>
          <p>
            MBA CHAI WALA PVT. LTD.{" "}
            <span>
              is an Indian café chain with a mission to inspire and foster a
              positive mindset among millions of people, igniting their
              ambitions and aspirations. Our core mission is to revolutionize
              the perception of tea, leveraging it as a catalyst for
              inspiration. Through our efforts, we aim to touch the lives of
              millions of individuals, encouraging them to adopt a
              growth-oriented mindset.
            </span>
          </p>
        </div>

        <div className="iTea">
          <div className="tea">
            <div className="Tea">
              <h1>i-TEA</h1>
              <p>
                i-TEA is a brand of the finest quality ethically sourced tea
                leaves. Our corporate mission of i-TEA is to serve inspiration
                in every cup. The “i” in i-TEA represents our core values of
                inspiration, creativity, innovation, and imagination. We believe
                that tea is not just a beverage, but a source of inspiration
                that can spark your imagination and elevate your senses. Our
                teas are carefully curated to awaken your senses, allowing you
                to savor the rich flavors and aroma of our premium tea leaves
                while igniting your inspiration.
              </p>
            </div>
          </div>
          <div className="tea">
            <img className="img" src={iTea} alt="iTeaImg" />
          </div>
        </div>

        <div className="riddhidev">
          <div className="riddhi">
            <img src={Riddhidev} alt="riddhidevImg" />
          </div>
          <div className="riddhi">
            <div className="riddhiPara">
              <h1>RIDDHIDEV</h1>
              <p>
                Riddhidev is a renowned and trusted brand that caters to the
                diverse spiritual needs of devotees, offering a premium range of
                puja samgri and idols of God. We take pride in our rich cultural
                heritage and deep-rooted commitment to inclusivity, ensuring
                that the essence of your faith is reflected in our products. We
                understand the profound significance of rituals and ceremonies
                in our culture, and our mission is to provide authentic products
                that enrich your spiritual journey.
              </p>
            </div>
          </div>
        </div>

        <div className="beans">
          <div className="darkBeans">
            <div className="beansDesc">
              {" "}
              <h1>THE DARK BEANS</h1>
              <p>
                The Dark Beans was founded as a subsidiary of MBA Chai Wala Pvt.
                Ltd. in January 2023 with a corporate mission to inspire people
                to pursue their ambitions. We aim to build a haven for coffee
                aficionados and drive change, one bean at a time. Our objective
                is to break free from the unfavorable stigma often associated
                with coffee and position it as an avenue for fostering a
                positive mindset focused on achieving goals and dreams.
              </p>
            </div>
          </div>
          <div className="darkBeans">
            <img src={DarkBeans} alt="darkBeansImg" />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Venture;
