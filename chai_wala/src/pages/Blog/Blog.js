import React from "react";
import "./Blog.scss";
import blogFirst from "../../Assets/Blog/Blog1st.webp";
import blogSecond from "../../Assets/Blog/blog2nd.webp";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router";
// import teaBackground from "../../Assets/Blog/I-TEA-2-jpg.webp";

function Blog() {
  const navigate = useNavigate();
  return (
    <>
      <div className="blog">
        <div className="cards">
          <div className="card">
            <img src={blogFirst} alt="img" />
            <div className="desc">
              <h3>
                India Runs on Chai: The Cultural Significance of India's Beloved
                Beverage
              </h3>
              <p>by Swarnika Porwal | May 2, 2023 | Chai</p>
              <p
                id="btn"
                onClick={() => {
                  navigate("/IndiaChai");
                }}
              >
                READ MORE
              </p>
            </div>
          </div>
          <div className="card">
            <img src={blogSecond} alt="img" />
            <div className="desc">
              <h3>Sipping on Good Health: Exploring the benefits of CHAI</h3>
              <p>by Swarnika Porwal | Apr 25, 2023 | Chai</p>
              <p
                id="btn"
                onClick={() => {
                  navigate("/SippingChai");
                }}
              >
                READ MORE
              </p>
            </div>
          </div>
        </div>
        <div className="subscription">
          <h1>
            Never Miss a Single <span>News</span>
          </h1>
          <p>
            Your content goes here. Edit or remove this text inline or in the
            module Content settings. You <br /> can also style every aspect of
            this content in the module Design settings and even apply <br />{" "}
            custom CSS to this text in the module Advanced settings.
          </p>
          <div className="input">
            <input type="text" placeholder="abcd@xyz.com" />
            <input type="phone" placeholder="+91-**********" />
          </div>
          <p className="btn">GET IT NOW!</p>
        </div>
        <div className="background">
          <div className="back">
            <p>GET STARTED</p>
            <h1>Become a Distributor</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              voluptatem.
            </p>
            <p className="apply" onClick={()=>{navigate("/i_tea")}}>APPLY NOW</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
