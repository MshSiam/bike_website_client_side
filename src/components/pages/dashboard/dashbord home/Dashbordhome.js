import { Grid } from "@mui/material"
import * as React from "react"
import MyOrders from "../normal user/My orders/MyOrders"

const Dashbordhome = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <MyOrders></MyOrders>
        </Grid>
      </Grid>
    </div>
  )
}

export default Dashbordhome
