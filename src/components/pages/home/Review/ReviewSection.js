import React, { useEffect, useState } from "react"
import { Row } from "react-bootstrap"
import ReviewSingle from "./ReviewSingle"

const ReviewSection = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])
  return (
    <div>
      <div className="container mb-5">
        <div id="eventList">
          <h3 className="py-5 text-center fw-bold">
            What Our Coustomers Say About Our Service
          </h3>
          <Row md={4} className="g-4 all-products">
            {products.map((product) => (
              <ReviewSingle product={product} key={product._id}></ReviewSingle>
            ))}
          </Row>
        </div>
      </div>
    </div>
  )
}

export default ReviewSection
