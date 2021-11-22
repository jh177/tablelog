import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route, Link } from "react-router-dom";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { AuthRoute } from "../util/route_util";
import Modal from "./modal/modal";

const App = () => (
  <div>
    <Modal/>
    <header>
      <Link to="/" className="header-link">
        <img src="app/assets/images/tablelog-logo-1.png" alt="logo" />
      </Link>
      <GreetingContainer/>
    </header>

    {/* <AuthRoute path="/login" component={LoginFormContainer} /> */}
    {/* <AuthRoute path="/signup" component={SignupFormContainer} /> */}
    {/* <Route exact path="/" component={} /> */}
  </div>
);

export default App;