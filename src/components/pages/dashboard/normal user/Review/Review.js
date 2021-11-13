import axios from "axios"
import { Col, Container, Row } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { Button } from "@mui/material"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"
import useAuth from "../../../../../hooks/useAuth"

const Review = () => {
  const { user } = useAuth()
  const history = useHistory()
  const { register, handleSubmit, reset } = useForm()
  const onSubmit = (data) => {
    data.email = user?.email
    console.log(data.email)
    axios
      .post("https://fast-brushlands-19287.herokuapp.com/review", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Review Added Succefully")
          history.push("/home")
          reset()
        }
      })
  }
  return (
    <div>
      <Container>
        <Row>
          <Col md={2}></Col>

          <Col md={8} className="mt-5 d-flex">
            <div className="add-reg-form">
              <h2 className="text-center mb-3 fw-bold">Please Add A Review</h2>

              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  style={{ width: "65%", margin: 5 }}
                  placeholder="Your Name"
                  {...register("name", { required: true })}
                />
                <input
                  style={{ width: "65%", margin: 5 }}
                  placeholder="Your Comment"
                  {...register("comment", { required: true })}
                />

                <input
                  style={{ width: "65%", margin: 5 }}
                  type="number"
                  placeholder="Star Rating min: 1, max: 5"
                  {...register("rating", { min: 1, max: 5 })}
                />

                <Button
                  style={{ width: "65%", margin: 5 }}
                  type="submit"
                  variant="contained"
                  color="success">
                  Add Review
                </Button>
              </form>
              <Link to="/home">
                <Button style={{ width: "65%", margin: 5 }} variant="contained">
                  Go Back Home
                </Button>
              </Link>
            </div>
          </Col>
          <Col md={2}></Col>
        </Row>
      </Container>
    </div>
  )
}

export default Review
