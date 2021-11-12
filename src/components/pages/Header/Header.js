import { Container, Nav, Navbar } from "react-bootstrap"
import Button from "@mui/material/Button"
import React from "react"
import { Link, NavLink } from "react-router-dom"
import useAuth from "../../../hooks/useAuth"
import { Box } from "@mui/system"

const Header = () => {
  const { user, logOut } = useAuth()
  return (
    <div>
      <Navbar
        className="nvbg"
        bg="dark"
        collapseOnSelect
        expand="lg"
        sticky="top">
        <Container fluid>
          <Navbar.Brand>
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/home"
              className="nav-link color-light fw-bold">
              HICONSUMPTION
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle
            className="toggle bg-white"
            aria-controls="navbarScroll"
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0 fw-bold" navbarScroll>
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/home">
                <Button color="inherit">Home</Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/bikes">
                <Button color="inherit">Bikes</Button>
              </NavLink>

              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/about">
                <Button color="inherit">About</Button>
              </NavLink>

              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/contact">
                <Button color="inherit">Contact</Button>
              </NavLink>
              {user?.email ? (
                <Box>
                  <NavLink
                    style={{ textDecoration: "none", color: "white" }}
                    to="/dashboard">
                    <Button color="inherit">Dashboard</Button>
                  </NavLink>

                  <Button
                    style={{ textDecoration: "none", color: "white" }}
                    onClick={logOut}
                    color="inherit">
                    Log Out
                  </Button>
                </Box>
              ) : (
                <NavLink
                  style={{ textDecoration: "none", color: "white" }}
                  to="/login">
                  <Button color="inherit">Login</Button>
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
