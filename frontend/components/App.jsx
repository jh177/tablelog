import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route, Link, Switch} from "react-router-dom";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { ProtectedRoute, AuthRoute } from "../util/route_util";
import Modal from "./modal/modal";
import SubHeader from "./subheader/sub_header";
import RestaurantIndexContainer from "./restaurants/restaurant_index_container";
import RestaurantShowContainer from "./restaurants/restaurant_show_container";
import ReservationFormContainer from "./reservations/reservation_form_container";
import ReservationShowContainer from "./reservations/reservation_show_container";
import ReservationModifyContainer from "./reservations/reservation_modify_container";
import ReservationFormEditContainer from "./reservations/reservation_form_edit_container";
import ReservationCancelContainer from "./reservations/reservation_cancel_container";

const App = () => (
  <div>
    <Modal/>
    <header>
      <SubHeader/>
      <div className="main-header">
        <Link to="/" className="header-link">
          <img src="https://tablelog-seed.s3.us-west-1.amazonaws.com/tablelog-logo-1.png" alt="logo" />
          {/* <img src="https://cdn.otstatic.com/cfe/7/images/opentable-logo-153e80.svg" alt="logo" /> */}
          {/* <img src="../../assets/images/tablelog-logo-1.png" alt="logo" /> */}
        </Link>
        <GreetingContainer/>
      </div>
    </header>
    
    <Switch>
      <Route exact path="/restaurants/:restaurantId" component={RestaurantShowContainer} />
      <ProtectedRoute exact path="/booking/:restaurantId" component={ReservationFormContainer}/>
      <ProtectedRoute exact path="/booking/:restaurantId/view/:reservationId" component={ReservationShowContainer}/>
      <ProtectedRoute exact path="/booking/:restaurantId/modify/:reservationId" component={ReservationModifyContainer}/>
      <ProtectedRoute exact path="/booking/:restaurantId/:reservationId/edit" component={ReservationFormEditContainer}/>
      <ProtectedRoute exact path="/booking/:restaurantId/cancel/:reservationId" component={ReservationCancelContainer}/>
      <Route exact path="/" component={RestaurantIndexContainer} />
    </Switch>
    {/* <AuthRoute path="/login" component={LoginFormContainer} /> */}
    {/* <AuthRoute path="/signup" component={SignupFormContainer} /> */}
    {/* <Route exact path="/" component={} /> */}
  </div>
);

export default App;