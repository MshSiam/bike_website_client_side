import React from "react"
import Banner from "./Banner/Banner"
import Bikse from "../bikes/Bikes"
import AboutUs from "../about/AboutUs"
import ContactUs from "../contact/ContactUs"
import ReviewSection from "./Review/ReviewSection"

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Bikse></Bikse>
      <ReviewSection></ReviewSection>
      <AboutUs></AboutUs>
      <ContactUs></ContactUs>
    </div>
  )
}

export default Home
