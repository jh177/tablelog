import React from "react";
import { withRouter } from "react-router";

class ReservationCancel extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.requestReservation(this.props.match.params.reservationId);
    // this.props.requestRestaurant(this.props.match.params.restaurantId);
  }

  handleClick(){
    this.props.deleteReservation(this.props.match.params.reservationId)
      .then(()=>this.props.history.push("/profile"))
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
      <div className="reservation-cancel-main">
        <div className="reservation-cancel-info">
          <h1>Cancel Your Reservation</h1>

          <div className="reservation-cancel-details">
            <div className="reservation-cancel-details-left">
              <img src={restaurant.photoUrl} alt="restaurant-image" />
            </div>
            <div className="reservation-cancel-details-right">
              <div>
                <span>FOR</span>
                <p>{reservation.party_size}</p>
              </div>
              <div>
                <span>DATE</span>
                <p>{new Date(reservation.date).toString().slice(0, 15)}</p>
              </div>
              <div>
                <span>TIME</span>
                <p>{reservation.time}</p>
              </div>
              <div>
                <span>RESTAURANT</span>
                <p>{restaurant.name}</p>
              </div>
            </div>
          </div>
        </div>
        <button 
          onClick={this.handleClick}
          id="reservation-cancel-button"
          >Cancel Reservation</button>
      </div>
    )
  }
}

export default withRouter(ReservationCancel);