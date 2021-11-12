import {
  Container,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Alert
} from "@mui/material"
import React, { useState } from "react"
import { Grid } from "@mui/material"
import { NavLink, useHistory, useLocation } from "react-router-dom"
import useAuth from "../../../hooks/useAuth"
// import useAuth from "./../../../hooks/useAuth"

const Signup = () => {
  const [loginData, setLoginData] = useState({})
  const { registerUser, user, isLoading, authError } = useAuth()
  const history = useHistory()
  const location = useLocation()

  // handle blur
  const handleOnBlur = (e) => {
    const field = e.target.name
    const value = e.target.value
    const newLoginData = { ...loginData }
    // console.log(newLoginData)
    newLoginData[field] = value
    setLoginData(newLoginData)
  }
  // handle Submit
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Password did not Matched")
      return
    }
    registerUser(loginData.email, loginData.password, loginData.name, history)
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
          {!isLoading && (
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: "65%", m: 1 }}
                id="standard-basic"
                label="Your Name"
                name="name"
                onBlur={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: "65%", m: 1 }}
                id="standard-basic"
                label="Your Email"
                name="email"
                type="email"
                onBlur={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: "65%", m: 1 }}
                id="standard-basic"
                label="Your Password"
                type="password"
                name="password"
                onBlur={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: "65%", m: 1 }}
                id="standard-basic"
                label="ReType Your Password"
                type="password"
                name="password2"
                onBlur={handleOnBlur}
                variant="standard"
              />

              <Button
                sx={{ width: "65%", m: 1 }}
                type="submit"
                variant="contained">
                SignUp
              </Button>
              <br />
              <Typography variant="p">
                {" "}
                Already Have an Account ?
                <NavLink style={{ textDecoration: "none" }} to="/login">
                  <Button variant="text"> Login</Button>
                </NavLink>{" "}
                here
              </Typography>
            </form>
          )}
          {isLoading && <CircularProgress />}
          {user?.email && (
            <Alert sx={{ width: "65%", m: "0 auto" }} severity="success">
              User Created successfully!
            </Alert>
          )}
          {authError && (
            <Alert sx={{ width: "65%", m: "0 auto" }} severity="error">
              {authError}
            </Alert>
          )}
        </Grid>
      </Grid>
    </Container>
  )
}

export default Signup
