import React, { useEffect, useState } from "react";
import "./ITea.scss";
import Hero from "./Components/First/Hero";
import Infused from "./Components/Infused/Infused";
import Inspiration from "./Components/Inspiration/Inspiration";
import Description from "./Components/Description/Description";
import EnquiryForm from "./Components/EnquiryForm/EnquiryForm";
import Footer from "../../components/Footer/Footer";
import { axiosClient } from "../../utils/axiosClient";

function ITea() {
const [data, setData] = useState([])
  async function onLoad(){
    const response = await axiosClient.get("/iTea/")
setData(response.data.result)
  }
  useEffect(()=> {
    onLoad()
  },[])
  return (
    <>
      <div className="itea">
        <Hero />
        <Infused />
        <Inspiration />
        <Description data={data}/>
        <EnquiryForm />
        <Footer />
      </div>
    </>
  );
}

export default ITea;
