import React from "react"
import { useForm } from "react-hook-form"
import axios from "axios"
import { Button } from "@mui/material"
import css from "./addproduct.css"

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm()
  const onSubmit = (data) => {
    console.log(data)

    // axios post //
    axios.post("http://localhost:5000/bikes", data).then((res) => {
      if (res.data.insertedId) {
        alert("Bike Added !!")
        reset()
      }
    })
  }
  return (
    <div className="container spot-container">
      <h1 className="spot-heading my-5 text-primary">
        Add a New Bike And Bost Selling
      </h1>

      {/* hook form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Bike Name & Model"
          {...register("name", { required: true })}
        />

        <input
          placeholder="Description"
          type="text"
          {...register("description", { required: true })}
        />
        <input
          type="text"
          placeholder="image-url"
          {...register("img", { required: true })}
        />
        <input
          placeholder="Price"
          type="number"
          {...register("price", { required: true })}
        />
        <input
          placeholder="Engine"
          type="text"
          {...register("Engine", { required: true })}
        />
        <input
          placeholder="Origin"
          type="text"
          {...register("Origin", { required: true })}
        />

        {/* <input className="btn1" type="submit" /> */}
        <Button
          style={{ marginTop: "15px", width: "65%" }}
          variant="contained"
          type="submit"
          color="warning">
          Add to Database
        </Button>
      </form>
    </div>
  )
}

export default AddProduct
