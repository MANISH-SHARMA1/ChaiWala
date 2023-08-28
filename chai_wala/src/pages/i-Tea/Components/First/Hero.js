import React, { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { axiosClient } from "../../../../utils/axiosClient";

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
};

function Hero() {
  const [data, setData] = useState([]);

  async function onLoad() {
    const response = await axiosClient.get("iteaHero");
    setData(response.data.result);
  }
  useEffect(() => {
    onLoad();
  }, []);
  return (
    <>
      <div className="slide-container" style={{ paddingTop: "9vh" }}>
        <Slide>
          {data?.map((slideImage, index) => (
            <div key={index}>
              <div
                className="divStyle"
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.imgUrl})`,
                  height: "90vh",
                }}
              ></div>
            </div>
          ))}
        </Slide>
      </div>
    </>
  );
}

export default Hero;
