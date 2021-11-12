import { Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import React from "react"
import css from "./footer.css"

const Footer = () => {
  return (
    <div className="footer">
      {/* <div className="container">
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4"></div>
          <div className="col-lg-4"></div>
        </div>
      </div> */}
      <Box>
        <Grid container style={{ color: "white" }}>
          <Grid style={{ textAlign: "left" }} xs={6} md={6} item>
            <Typography variant="h5">HICONSUMPTION</Typography>
            <br />
            <Typography style={{ marginTop: 4 }} variant="h6">
              Shop Location
            </Typography>
            <Typography variant="p">8 Queen St. N Unit #1</Typography>
            <br />
            <Typography variant="p">Kitchneer, Canada</Typography>
            <br />
            <Typography variant="p">N3H 2G8</Typography>
          </Grid>

          <Grid xs={6} md={6} item>
            <Typography style={{ marginTop: 4 }} variant="h6">
              Contact Information
            </Typography>
            <Typography variant="p">
              Phone : 01765871554
              <br />
              Email :{" "}
              <a style={{ color: "white" }} href="#">
                Siyamkenway@gmail.com
              </a>
            </Typography>
          </Grid>
        </Grid>
        <p className="fw-bold fs-6 text-light">
          &copy; All Right Reserved || MUHAMMAD SIAM
        </p>
      </Box>
    </div>
  )
}

export default Footer
