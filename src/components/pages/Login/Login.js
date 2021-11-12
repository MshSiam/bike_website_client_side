import {
  Typography,
  TextField,
  Button,
  Alert,
  CircularProgress
} from "@mui/material"
import React, { useState } from "react"
import { Grid } from "@mui/material"
import { NavLink, useLocation, useHistory } from "react-router-dom"
import { Box } from "@mui/system"
import useAuth from "../../../hooks/useAuth"

const Login = () => {
  const [loginData, setLoginData] = useState({})
  const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth()

  const location = useLocation()
  const history = useHistory()
  // handle blur //
  const handleOnChange = (e) => {
    const field = e.target.name
    const value = e.target.value
    const newLoginData = { ...loginData }
    newLoginData[field] = value
    setLoginData(newLoginData)
  }

  // button handler
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history)
    e.preventDefault()
  }

  // google sign in
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history)
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
              sx={{ width: "65%", m: 1 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              onBlur={handleOnChange}
              variant="standard"
            />
            <TextField
              sx={{ width: "65%", m: 1 }}
              id="standard-basic"
              label="Your Password"
              type="password"
              name="password"
              onBlur={handleOnChange}
              variant="standard"
            />

            <Button
              sx={{ width: "65%", m: 1 }}
              type="submit"
              variant="contained">
              Login
            </Button>
            <br />

            <Typography variant="p">
              {" "}
              New User ? Please
              <NavLink style={{ textDecoration: "none" }} to="/signup">
                <Button type="submit" variant="text">
                  {" "}
                  Signup
                </Button>
              </NavLink>
            </Typography>

            {isLoading && <CircularProgress />}
            {user?.email && (
              <Alert severity="success">Loged in successfully!</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
          </form>

          <Button onClick={handleGoogleSignIn} variant="contained">
            Google Sign In
          </Button>
        </Grid>
      </Grid>
      <br />
    </Box>
  )
}

export default Login
