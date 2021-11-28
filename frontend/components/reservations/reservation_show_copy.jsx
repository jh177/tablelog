import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

class ReservationShow extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    // debugger
    this.props.requestReservation(this.props.match.params.reservationId);
    this.props.requestRestaurant(this.props.match.params.restaurantId);
  }

  render(){
    if (!this.props.reservation || !this.props.restaurant) {
      return null;
    }


    if (this.props.reservation.user_id !== this.props.currentUser.id) {
      this.props.history.push("/")
    }

    const {reservation, restaurant, currentUser} = this.props;


    //update localStorage for modify and edit
    localStorage.setItem("date", reservation.date);
    localStorage.setItem("time", reservation.time);
    localStorage.setItem("partySize", reservation.party_size);


    return(
      <div>
        <h1>{restaurant.name}</h1>
        <br />
        <h2>Reservation confirmed</h2>
        <br />
        <span>{reservation.party_size}</span>&nbsp;
        <span>{reservation.date}</span>&nbsp;
        <span>{reservation.time}</span>
        <br />

        <Link to={`/booking/${restaurant.id}/modify/${reservation.id}`}>Modify</Link>

        <Link to={`/booking/${restaurant.id}/cancel/${reservation.id}`}>Cancel</Link>

        <br />
        <button>Get directions</button>

        <h3>Who's going?</h3>
        <h3>{currentUser.fname} {currentUser.lname}</h3>
        <h3>Me Host</h3>
        

      </div>
    )
  }
}

export default withRouter(ReservationShow);