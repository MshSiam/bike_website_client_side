import { Container, Typography, CircularProgress, Alert } from "@mui/material"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useParams } from "react-router"
import useAuth from "../../../hooks/useAuth"
import css from "./purchasing.css"

const Purchase = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const onSubmit = (data) => {
    data.email = user?.email
    data.BikeName = bike.name
    data.BikePrice = bike.price
    data.BikeOrigin = bike.Origin
    data.BikeEngine = bike.Engine
    data.status = "Pending"
    console.log(data)

    // post via axios //
    axios
      .post("https://fast-brushlands-19287.herokuapp.com/purchasing", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Booked Successfully !!")
          reset()
        }
      })
  }

  const { purchasingId } = useParams()
  const [bike, setBike] = useState({})
  useEffect(() => {
    fetch(`https://fast-brushlands-19287.herokuapp.com/bikes/${purchasingId}`)
      .then((res) => res.json())
      .then((data) => setBike(data))
  }, [])
  const { user } = useAuth()

  return (
    <div className="container ">
      <Typography className="my-2" variant="h4">
        Confirm Your Order
      </Typography>
      <div className="row">
        <div className="my-3 col-lg-8 col-md-12">
          <h3 className="my-2">Bike Details</h3>
          <hr />

          <img className="img-fluid my-3" src={bike.img} alt="" />
          <h5 className="bike-des">Name : {bike.name}</h5>
          <p className="bike-des">{bike.description}</p>
          <p className="bike-des fw-bold"> Engine : {bike.Engine}</p>
          <p className="bike-des fw-bold"> Origin : {bike.Origin}</p>

          <h4 className="bike-price">
            Price : <span className="text-danger">${bike.price}</span>
          </h4>
        </div>
        <div className=" my-3 col-lg-4 col-md-12">
          <h4>Complete This Form</h4>
          <hr />
          <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
            <input
              readOnly
              placeholder="email"
              type="email"
              defaultValue={user.email}
              {...register("email")}
            />

            <input
              placeholder="your name"
              type="text"
              defaultValue={user?.name}
              {...register("userName", { required: true })}
            />

            <input
              type="text"
              readOnly
              defaultValue={bike.name}
              {...register("BikeName")}
            />
            <input
              readOnly
              type="number"
              defaultValue={bike.price}
              {...register("BikePrice")}
            />

            <input {...register("zipode")} placeholder="zip code" />
            <input
              {...register("address", { required: true })}
              placeholder="address"
            />
            <input
              {...register("phone", { required: true })}
              placeholder="phone"
            />

            <input
              type="submit"
              value="Confirm Order"
              className="btn-primary"
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Purchase
