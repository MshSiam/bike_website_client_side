import React from "react"
import css from "./banner.css"

const Banner = () => {
  return (
    <div className="bg-img px-4">
      <div className="overlay">
        <h5 className="text-light">
          Welcome to
          <span className="fw-bold text-warning"> HICONSUMTION</span>
        </h5>
        <h2 className="text-light">
          The 15 Best New Motorcycles You Can Buy Under
          <span className="fw-bold text-warning">$5,000</span> in 2021{" "}
        </h2>
      </div>
    </div>
  )
}

export default Banner
