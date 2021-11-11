import { Container, Typography, TextField, Button } from "@mui/material"
import React, { useState } from "react"
import { Grid } from "@mui/material"
import { NavLink } from "react-router-dom"
// import useAuth from "./../../../hooks/useAuth"

const Signup = () => {
  // handle Submit
  const handleLoginSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <Container s>
      <Grid container spacing={2}>
        <Grid
          style={{ margin: "40px auto" }}
          item
          sx={{ mt: 8 }}
          xs={12}
          md={6}>
          <Typography variant="h4" gutterBottom>
            Register
          </Typography>
          {/* {!isLoading && <form onSubmit={handleLoginSubmit}> */}
          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Name"
              name="name"
              // onBlur={handleOnBlur}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              type="email"
              // onBlur={handleOnBlur}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Password"
              type="password"
              name="password"
              // onBlur={handleOnBlur}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="ReType Your Password"
              type="password"
              name="password2"
              // onBlur={handleOnBlur}
              variant="standard"
            />

            <Button
              sx={{ width: "75%", m: 1 }}
              type="submit"
              variant="contained">
              SignUp
            </Button>
            <br />
            <Typography variant="p">
              {" "}
              Already Have an Account ?
              <NavLink style={{ textDecoration: "none" }} to="/signup">
                <Button variant="text"> Login</Button>
              </NavLink>{" "}
              here
            </Typography>
          </form>
          {/* }{isLoading && <CircularProgress />}
          {user?.email && (
            <Alert severity="success">User Created successfully!</Alert>
          )}
          {authError && <Alert severity="error">{authError}</Alert>} */}
        </Grid>
      </Grid>
    </Container>
  )
}

export default Signup
