import React from "react";
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

function Home() {
  return (
    <>
      <Hero />
      <TopStartups />
      <ITea />
      <Founder />
      <CoFounder />
      <Journey />
      <Introduction />
      <Discover />
      <Coolest />
      <Models />
      <OurStory />
      <YtFeed />
      <Footer />
    </>
  );
}

export default Home;
