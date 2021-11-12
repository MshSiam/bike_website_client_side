import { TextField, Button, Alert } from "@mui/material"
import React, { useState } from "react"

const MakeAdmin = () => {
  const [email, setEmail] = useState("")
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e) => {
    const user = { email }
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data)
          setSuccess(true)
        }
      })

    e.preventDefault()
  }

  // admin function
  const handleBlur = (e) => {
    setEmail(e.target.value)
  }
  return (
    <div>
      <h2>Make Admin</h2>
      <h4>You can make an user admin by submiting his/her email bellow</h4>

      <form onSubmit={handleSubmit}>
        <TextField
          style={{ marginBottom: "20px", width: "65%" }}
          id="standard-basic"
          label="email"
          type="email"
          onBlur={handleBlur}
          variant="standard"></TextField>
        <br />
        {success && (
          <Alert style={{ width: "65%", margin: "0 auto" }} severity="success">
            Made Admin Successfully
          </Alert>
        )}

        <Button
          style={{ marginBottom: "20px", marginTop: "20px", width: "65%" }}
          variant="contained"
          color="success"
          type="submit">
          Make Admin
        </Button>
      </form>
    </div>
  )
}

export default MakeAdmin