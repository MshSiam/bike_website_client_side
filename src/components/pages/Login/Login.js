import { Typography, TextField, Button } from "@mui/material"
import React, { useState } from "react"
import { Grid } from "@mui/material"
import { NavLink } from "react-router-dom"
import { Box } from "@mui/system"

const Login = () => {
  const [loginData, setLoginData] = useState({})

  // handle blur
  const handleOnBlur = (e) => {
    const field = e.target.name
    const value = e.target.value
    const newLoginData = { ...loginData }
    newLoginData[field] = value
    setLoginData(newLoginData)
  }

  // button handler
  const handleLoginSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <Box>
      <Grid className="my-4" container>
        <Grid style={{ margin: "0 auto" }} item>
          <Typography variant="h4" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              onBlur={handleOnBlur}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Password"
              type="password"
              name="password"
              onBlur={handleOnBlur}
              variant="standard"
            />

            <Button
              sx={{ width: "75%", m: 1 }}
              type="submit"
              variant="contained">
              Login
            </Button>
            <br />

            <Typography variant="p">
              {" "}
              New User ? Please
              <NavLink style={{ textDecoration: "none" }} to="/signup">
                <Button variant="text"> Signup</Button>
              </NavLink>
            </Typography>

            {/* {isLoading && <CircularProgress />}
            {user?.email && (
              <Alert severity="success">Login successfully!</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>} */}
          </form>

          <Button variant="contained">Google Sign In</Button>
          {/* <Button onClick={handleGoogleSignIn} variant="contained">
            Google Sign In
          </Button> */}
        </Grid>
      </Grid>
      <br />
    </Box>
  )
}

export default Login
