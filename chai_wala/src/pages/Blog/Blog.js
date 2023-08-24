import React, { useEffect, useState } from "react";
import "./Blog.scss";
import {axiosClient} from "../../utils/axiosClient"
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router";
// import teaBackground from "../../Assets/Blog/I-TEA-2-jpg.webp";

function Blog() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  async function onLoad() {
    const response = await axiosClient.get("/blog/");
    setData(response.data.result);
  }

  useEffect(() => {
    onLoad();
  }, []);
  return (
    <>
      <div className="blog">
        <div className="cards">
          <div
            className="card"
            onClick={() => {
              navigate("/IndiaChai");
            }}
          >
            <img src={data[0]?.imgUrl} alt="img" />
            <div className="descc">
              <h3>{data[0]?.heading}</h3>
              <p>by Swarnika Porwal | May 2, 2023 | Chai</p>
              <p id="btn">READ MORE</p>
            </div>
          </div>
          <div
            className="card"
            onClick={() => {
              navigate("/SippingChai");
            }}
          >
            <img src={data[1]?.imgUrl} alt="img" />
            <div className="descc">
              <h3>{data[1]?.heading}</h3>
              <p>by Swarnika Porwal | Apr 25, 2023 | Chai</p>
              <p id="btn">READ MORE</p>
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
            <p
              className="apply"
              onClick={() => {
                navigate("/i_tea");
              }}
            >
              APPLY NOW
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
