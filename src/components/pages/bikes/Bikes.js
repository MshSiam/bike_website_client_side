import React, { useEffect, useState } from "react"
import Bike from "./Bike/Bike"

const Bikes = () => {
  const [bikes, setBikes] = useState([])

  useEffect(() => {
    fetch("https://fast-brushlands-19287.herokuapp.com/bikes")
      .then((res) => res.json())
      .then((data) => setBikes(data))
  }, [])
  return (
    <div>
      <h2 className="my-4 text-warning fw-bolder"> Top Selling</h2>
      <h1>Bikes</h1>
      {/* <hr className="service-hr" /> */}
      <div className="container">
        <div className="row g-2">
          {bikes.slice(0, 6).map((bike) => (
            <Bike spot={bike} key={bike._id}></Bike>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Bikes
