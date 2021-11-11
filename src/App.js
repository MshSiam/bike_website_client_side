import logo from "./logo.svg"
import "./App.css"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Header from "./components/pages/Header/Header"
import Home from "./components/pages/home/Home"
import AboutUs from "./components/pages/about/AboutUs"
import ContactUs from "./components/pages/contact/ContactUs"
import Login from "./components/pages/Login/Login"
import Signup from "./components/pages/signup/Signup"
import NotFind from "./components/pages/NotFound/NotFind"
import Footer from "./components/pages/Footer/Footer"
import DashBoard from "./components/pages/dashboard/DashBoard"
import BikePage from "./components/pages/bikes/BikePage"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/bikes">
            <BikePage></BikePage>
          </Route>

          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/contact">
            <ContactUs></ContactUs>
          </Route>
          <Route path="/dashboard">
            <DashBoard></DashBoard>
          </Route>

          {/* <MyOrders path="/user/:userId">
              <Booking></Booking>
            </MyOrders> */}

          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
          <Route path="/*">
            <NotFind></NotFind>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  )
}

export default App
