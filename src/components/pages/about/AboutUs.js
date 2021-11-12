import React from "react"
import aboutImg from "../../../img/istockphoto-1270571224-170667a.jpg"

const AboutUs = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="row ">
          <div className="col-lg-6 col-md-12">
            <img className="img-fluid" src={aboutImg} alt="" />
          </div>
          <div className="col-lg-6 col-md-12">
            <h1 className="about_heading mt-5">A B O U T</h1>
            <hr />
            <p>
              HICONSUMPTION was established by gearheads for gearheads as a
              modern day men’s lifestyle publication. We’re discoverers of
              uncharted players in the space, and proclaimers of passion for an
              elevated way of living. Proudly built in Los Angeles, California,
              our access to such experimental backyard landscapes keeps us on
              our toes and in-the-know of what’s to come in the realm of
              adventure, tech, gear, automotive, and style. We uphold those
              merits to this day, keeping them near and dear — allowing us to
              remain on the cutting edge of a life worth exploring and at the
              ready to offer our expertise to an audience vying for the same
              cherished principles.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
