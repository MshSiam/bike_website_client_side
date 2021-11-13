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
import css from "../../normal user/My orders/myorder.css"

const ManageProducts = () => {
  const [bikes, setBikes] = useState([])

  //   This is For Delete

  const handleDeelete = (id) => {
    const url = `https://fast-brushlands-19287.herokuapp.com/bikes/${id}`
    fetch(url, {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        if (data.deletedCount) {
          alert("delete Successfully")
          const remaining = bikes.filter((order) => order._id !== id)
          setBikes(remaining)
        }
      })
  }
  //   load data
  useEffect(() => {
    const url = `https://fast-brushlands-19287.herokuapp.com/bikes`
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBikes(data))
  }, [])
  return (
    <div className="myorder">
      <h2>Total products : {bikes.length}</h2>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          {/* table head */}
          <TableHead>
            <TableRow>
              <TableCell align="right">Bike Name & Model</TableCell>
              <TableCell align="right">Bike Price</TableCell>
              <TableCell align="right">Bike Origin</TableCell>
            </TableRow>
          </TableHead>
          {/* table body */}
          <TableBody>
            {bikes.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">$ {row.price}</TableCell>
                <TableCell align="right">{row.Origin}</TableCell>

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

export default ManageProducts
