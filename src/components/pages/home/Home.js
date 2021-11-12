import React from "react"
import Banner from "./Banner/Banner"
import Bikse from "../bikes/Bikes"
import AboutUs from "../about/AboutUs"
import ContactUs from "../contact/ContactUs"

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Bikse></Bikse>
      <AboutUs></AboutUs>
      <ContactUs></ContactUs>
    </div>
  )
}

export default Home
