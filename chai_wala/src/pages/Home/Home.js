import React from 'react'
import Founder from '../../components/Founders/Founder'
import CoFounder from '../../components/Founders/CoFounder'
import Introduction from '../../components/Introduction/Introduction'
import Coolest from '../../components/Coolest/Coolest'
import OurStory from '../../components/OurStory/OurStory'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <>
    <Founder/>
    <CoFounder/>
    <Introduction/>
    <Coolest/>
    <OurStory/>
    <Footer/>
    </>
  )
}

export default Home