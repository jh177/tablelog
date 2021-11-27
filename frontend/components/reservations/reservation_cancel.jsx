import React from "react";
import { withRouter } from "react-router";

class ReservationCancel extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.requestReservation(this.props.match.params.reservationId);
    this.props.requestRestaurant(this.props.match.params.restaurantId);
  }

  handleClick(){
    this.props.deleteReservation(this.props.match.params.reservationId)
      .then(()=>this.props.history.push("/"))
  }

  render(){

    if (!this.props.reservation || !this.props.restaurant) {
      return null;
    }

    if (this.props.reservation.user_id !== this.props.currentUser.id) {
      this.props.history.push("/")
    }

    const {reservation, restaurant} = this.props

    return(
      <div>
        <h1>Cancel Your Reservation</h1>
        <div>
          <li>GUEST: {reservation.party_size}</li>
          <li>DATE: {reservation.date}</li>
          <li>TIME: {reservation.time}</li>
          <li>RESTAURANT: {restaurant.name}</li>
        </div>
        <button onClick={this.handleClick}>Cancel Reservation</button>
      </div>
    )
  }
}

export default withRouter(ReservationCancel);