import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route, Link, Switch} from "react-router-dom";
import { Redirect } from "react-router-dom";
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
import ProfileContainer from "./profile/profile_container";
import SearchBox from "./search/search_box";
import SearchPageContainer from "./search/search_page_container";
import SearchPage from "./search/search_page";
import Landing from "./landing/landing";
import ReviewFormContainer from "./review/review_form_container";
import Footer from "./footer";


const App = () => (
  <div className="app">
    <Modal/>
    <header>
      <SubHeader/>
      <div className="main-header">
        <Link to="/" className="header-link" onClick={()=>{localStorage.setItem("searchTerm", "")}}>
          <img src="https://tablelog-seed.s3.us-west-1.amazonaws.com/tablelog-logo-2.png" alt="logo" />
        </Link>
        <GreetingContainer/>
      </div>
    </header>
        
    <Switch>
      <Route exact path="/restaurants/:restaurantId" component={RestaurantShowContainer} />
      <ProtectedRoute exact path="/booking/:restaurantId" component={ReservationFormContainer}/>
      <ProtectedRoute exact path="/booking/view/:reservationId" component={ReservationShowContainer}/>
      <ProtectedRoute exact path="/booking/modify/:reservationId" component={ReservationModifyContainer}/>
      <ProtectedRoute exact path="/booking/edit/:reservationId" component={ReservationFormEditContainer}/>
      <ProtectedRoute exact path="/booking/cancel/:reservationId" component={ReservationCancelContainer}/>
      <ProtectedRoute exact path="/profile" component={ProfileContainer}/>
      <ProtectedRoute exact path="/feedback/:reservationId" component={ReviewFormContainer}/>
      {/* <Route exact path="/search/:searchTerm" component={SearchPage}/> */}
      <Route exact path="/search/:query" component={SearchPageContainer}/>
      <Route exact path="/search" component={SearchPageContainer}/>
      <Route exact path="/" component={Landing} />
      <Route render={() => <Redirect to={{ pathname: "/" }} />} />
    </Switch>
    {/* <AuthRoute path="/login" component={LoginFormContainer} /> */}
    {/* <AuthRoute path="/signup" component={SignupFormContainer} /> */}
    {/* <Route exact path="/" component={} /> */}

    <footer className='footer'>
      <Footer/>
    </footer>
  </div>
);

export default App;