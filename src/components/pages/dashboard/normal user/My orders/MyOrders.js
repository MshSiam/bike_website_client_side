import React, { useEffect, useState } from "react"
import useAuth from "../../../../../hooks/useAuth"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { Button } from "@mui/material"
import css from "./myorder.css"

const MyOrders = () => {
  const { user } = useAuth()
  const [orders, setOrder] = useState([])

  //   load data
  //
  useEffect(() => {
    const url = `https://fast-brushlands-19287.herokuapp.com/purchasing/email/?email=${user?.email}`
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setOrder(data)
      })
  }, [user.email])

  //   This is For Delete

  const handleDeelete = (id) => {
    const url = `https://fast-brushlands-19287.herokuapp.com/purchasing/${id}`
    fetch(url, {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        if (data.deletedCount) {
          alert("delete Successfully")
          const remaining = orders.filter((order) => order._id !== id)
          setOrder(remaining)
        }
      })
  }
  return (
    <div className="myorder">
      <h2>My Orders : {orders.length}</h2>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          {/* table head */}
          <TableHead>
            <TableRow>
              <TableCell>User Name</TableCell>
              <TableCell align="right">Bike Name & Model</TableCell>
              <TableCell align="right">Bike Price</TableCell>
              <TableCell align="right">Bike Origin</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          {/* table body */}
          <TableBody>
            {orders.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.userName}
                </TableCell>
                <TableCell align="right">{row.BikeName}</TableCell>
                <TableCell align="right">$ {row.BikePrice}</TableCell>
                <TableCell align="right">{row.BikeOrigin}</TableCell>
                <TableCell className="text-warning fw-bold" align="right">
                  {row.status}
                </TableCell>
                <TableCell>
                  <Button
                    style={{ marginTop: 4 }}
                    color="error"
                    variant="contained"
                    onClick={() => handleDeelete(row._id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default MyOrders
