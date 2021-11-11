import { Container, Nav, Navbar } from "react-bootstrap"
import Button from "@mui/material/Button"
import React from "react"
import { Link, NavLink } from "react-router-dom"

const Header = () => {
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
                to="/dashboard">
                <Button color="inherit">Dashboard</Button>
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
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/login">
                <Button color="inherit">Login</Button>
              </NavLink>

              {/* {user?.email ? (
                <Navbar className="another-menu">
                  <Nav.Link>
                    <NavLink to="/addspot" className="nav-link">
                      <button className="menuBtn">Add Spot</button>
                    </NavLink>
                  </Nav.Link>
                  <NavLink to="/manageBookings" className="nav-link">
                    <button className="menuBtn">Manage Orders</button>
                  </NavLink>
                  <NavLink to="/myBookings" className="nav-link">
                    <button className="menuBtn">My Bookings</button>
                  </NavLink>
                  <NavLink to="/">
                    <button onClick={logOut} className="btn-danger rounded-3">
                      {sigOut}
                    </button>
                  </NavLink>
                  <Navbar.Text className="text-dark">
                    Sign in as :{" "}
                    <small className="text-dark ml-2">
                      {user?.displayName}
                    </small>
                  </Navbar.Text>
                </Navbar>
              ) : (
                <Navbar className="loginSingup">
                  <Nav.Link>
                    <NavLink to="/login" className="nav-link">
                      <button className="btn-danger2 loginbtn rounded-3">
                        {" "}
                        {signIn} Login
                      </button>
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink to="/signup" className="nav-link">
                      <button className="btn-danger rounded-3 signupbtn">
                        {" "}
                        Signup
                      </button>
                    </NavLink>
                  </Nav.Link>
                </Navbar>
              )} */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
