import React from "react"
import { Link, NavLink } from "react-router-dom"
import Button from "@mui/material/Button"
import css from "./bike.css"

const Bike = (props) => {
  const { name, img, _id, price, Origin, Engine, description } = props.spot
  return (
    <div className="service col-lg-6 col-md-12 col-12 my-5">
      <div className="bgcolor">
        <img className="service-img " src={img} alt="" />
        <h3 className="text-info">{name}</h3>
        <p className="bike-des">{description.slice(0, 300)}</p>
        <p className="bike-des fw-bold"> Engine : {Engine}</p>
        <p className="bike-des fw-bold"> Origin : {Origin}</p>

        <h4 className="bike-price">
          Price : <span className="text-danger">${price}</span>
        </h4>
        <NavLink to={`/purchasing/${_id}`}>
          <Button className="bike-btn" variant="contained">
            Purchase ${price}
          </Button>
        </NavLink>
      </div>
    </div>
  )
}

export default Bike
