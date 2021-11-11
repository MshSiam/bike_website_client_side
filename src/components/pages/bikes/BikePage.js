import React, { useEffect, useState } from "react"
import Bike from "./Bike/Bike"
import css from "./Bike/bikepage.css"

const BikePage = () => {
  const [bikes, setBikes] = useState([])

  useEffect(() => {
    fetch("bike.json")
      .then((res) => res.json())
      .then((data) => setBikes(data))
  }, [])
  return (
    <div>
      {/* <hr className="service-hr" /> */}
      <div className="sp-img px-4">
        <div className="overlay">
          <h1>Purchase Your Favourite Bike </h1>
        </div>
      </div>
      <div className="container">
        <div className="row g-2">
          {bikes.map((bike) => (
            <Bike spot={bike} key={bike._id}></Bike>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BikePage
