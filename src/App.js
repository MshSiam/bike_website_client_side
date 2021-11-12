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
import AuthProvider from "./components/Context/AuthProvider"
import PrivateRoute from "./private route/PrivateRouete"
import Purchase from "./components/pages/purchase/Purchase"

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <PrivateRoute path="/dashboard">
              <DashBoard></DashBoard>
            </PrivateRoute>
            <PrivateRoute path="/purchasing/:purchasingId">
              <Purchase></Purchase>
            </PrivateRoute>

            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/contact">
              <ContactUs></ContactUs>
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
      </AuthProvider>
    </div>
  )
}

export default App
