import React, { useEffect, useState } from "react";
import "./AboutUs.scss";
import AboutDesc from "../../components/AboutDesc/AboutDesc";
import Bonding from "../../components/Bonding/Bonding";
import { axiosClient } from "../../utils/axiosClient";

function AboutUs() {
  const [data, setData] = useState([]);

  async function loadData() {
    const response = await axiosClient.get("/aboutUs/");
    setData(response.data.result);
  }

  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <div className="about">
        <img src={data[0]?.headerImg} alt="mbaAbout" />
        <Bonding data={data} />
        <AboutDesc data={data} />
      </div>
    </>
  );
}

export default AboutUs;
