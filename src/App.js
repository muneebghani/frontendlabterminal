import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Products from "./components/products/Products";
import ContactUs from "./components/ContactUs";
import NotFound from "./components/NotFound";
import { Container } from "@material-ui/core";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <ToastContainer />
        <Container>
          <Switch>
            <Route path="/contactus" exact component={ContactUs} />
            <Route path="/" component={Products} />
            <Route path="/404-page-not-found" component={NotFound} />
            <Redirect to="/404-page-not-found" />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
