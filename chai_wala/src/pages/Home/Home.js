import React, { useEffect, useState } from "react";
import Founder from "../../components/Founders/Founder";
import CoFounder from "../../components/Founders/CoFounder";
import Introduction from "../../components/Introduction/Introduction";
import Coolest from "../../components/Coolest/Coolest";
import OurStory from "../../components/OurStory/OurStory";
import Footer from "../../components/Footer/Footer";
import Models from "../../components/Models/Models";
import Discover from "../../components/Discover/Discover";
import Journey from "../../components/Journey/Journey";
import TopStartups from "../../components/TopStartups/TopStartups";
import ITea from "../../components/ITea/ITea";
import Hero from "../../components/Hero/Hero";
import YtFeed from "../../components/YtFeed/YtFeed";
import { axiosClient } from "../../utils/axiosClient";

function Home() {
  const [data, setData] = useState([]);

  async function onLoad() {
    try {
      const response = await axiosClient.get("/home/");
      setData(response.data.result);
      console.log("HomeData", data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    onLoad();
  }, []);
  return (
    <>
      <Hero />
      <TopStartups />
      <ITea />
      <Founder data={data[0]} />
      <CoFounder data={data[1]} />
      <Journey data={data[2]} />
      <Introduction data={data[3]} />
      <Discover data={data[4]} />
      <Coolest data={data[6]} />
      <Models data={data[8]}/>
      <OurStory data={data[7]} />
      <YtFeed />
      <Footer />
    </>
  );
}

export default Home;
