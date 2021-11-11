import React from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import { TextareaAutosize } from "@mui/core"
import { Button, Typography } from "@mui/material"

const ContactUs = () => {
  // on submit
  const submitHandler = (e) => {
    e.preventDefault()
  }
  return (
    <div className="container">
      <Typography sx={{ marginTop: 4 }} variant="h3">
        Contact Us
      </Typography>
      ;
      <div className="row">
        <div className="col-lg-6 my-4">
          <Typography variant="h5">Send Us Message</Typography>;
          <hr />
          <Box
            component="form"
            onSubmit={submitHandler}
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" }
            }}
            noValidate
            autoComplete="off">
            <TextField
              style={{ width: "65%" }}
              id="filled-basic"
              label="Your Name"
              type="text"
              variant="filled"
            />
            <TextField
              required
              style={{ width: "65%" }}
              id="filled-basic"
              label="Your Email"
              type="email"
              variant="filled"
            />
            <TextField
              style={{ width: "65%" }}
              id="filled-basic"
              label="Phone Number"
              type="number"
              variant="filled"
            />
            <TextareaAutosize
              required
              aria-label="minimum height"
              minRows={3}
              placeholder="Your Message"
              style={{ width: "65%" }}
            />
            <Button variant="contained" type="submit" style={{ width: "65%" }}>
              Submit
            </Button>
          </Box>
        </div>
        <div className="col-lg-6 my-4">
          <Typography variant="h5">Others Information</Typography>
          <br />
          <hr />
          <Typography style={{ marginTop: 4 }} variant="h6">
            Shop Location
          </Typography>
          <Typography variant="p">8 Queen St. N Unit #1</Typography>
          <br />
          <Typography variant="p">Kitchneer, Canada</Typography>
          <br />
          <Typography variant="p">N3H 2G8</Typography>
          <br />
          <br />
          <br />
          <br />
          <Typography style={{ marginTop: 4 }} variant="h6">
            Contact Information
          </Typography>
          <Typography variant="p">
            Phone : 01765871554
            <br />
            Email : <a href="#">Siyamkenway@gmail.com</a>
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
