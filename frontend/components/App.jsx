import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route, Link } from "react-router-dom";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { AuthRoute } from "../util/route_util";
import Modal from "./modal/modal";
import SubHeader from "./subheader/sub_header";
import RestaurantIndexContainer from "./restaurants/restaurant_index_container";

const App = () => (
  <div>
    <Modal/>
    <header>
      <SubHeader/>
      <div className="main-header">
        <Link to="/" className="header-link">
          <img src="https://cdn.otstatic.com/cfe/7/images/opentable-logo-153e80.svg" alt="logo" />
          {/* <img src="../../assets/images/tablelog-logo-1.png" alt="logo" /> */}
        </Link>
        <GreetingContainer/>
      </div>
    </header>
    <Route exact path="/" component={RestaurantIndexContainer} />
    {/* <AuthRoute path="/login" component={LoginFormContainer} /> */}
    {/* <AuthRoute path="/signup" component={SignupFormContainer} /> */}
    {/* <Route exact path="/" component={} /> */}
  </div>
);

export default App;