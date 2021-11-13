import React from "react"
import { Card, Col } from "react-bootstrap"
import Rating from "react-rating"

const ReviewSingle = (props) => {
  const { name, _id, comment, rating, email } = props.product
  return (
    <Col md={3}>
      <Card>
        <Card.Body>
          <Card.Title className="mt-2">{name.slice(0, 25)}</Card.Title>
          <Card.Text>{comment}</Card.Text>
          <p>{email}</p>
          <Rating
            initialRating={rating}
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
            readonly
          />
        </Card.Body>
      </Card>
    </Col>
  )
}

export default ReviewSingle
