import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { FaRegCalendar, FaRegUser, FaCheckCircle, FaDirections} from "react-icons/fa"

class ReservationShow extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.requestReservation(this.props.match.params.reservationId);
  }

  render(){
    if (!this.props.reservation) return null;

    if (this.props.reservation.user_id !== this.props.currentUser.id) {
      this.props.history.push("/")
    }

    const {reservation, restaurant, currentUser} = this.props;

    //update localStorage for modify and edit
    localStorage.setItem("date", reservation.date);
    localStorage.setItem("time", reservation.time);
    localStorage.setItem("partySize", reservation.party_size);

    let displayDate = new Date(reservation.date).toString().slice(0, 15);

    return(
      <div className="reservation-show-main">
        <div className="reservation-show-restaurant">

          <div className="reservation-show-restaurant-details">
            <div className="reservation-show-restaurant-details-left">
              <img src={restaurant.photoUrls[0]} alt="restaurant-image" />
            </div>

            <div className="reservation-show-restaurant-details-right">
              <div className="reservation-show-restaurant-name">
                <Link to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link>
              </div>
              <div className="reservation-show-confirmation">
                <FaCheckCircle className="reservation-fa-check-circle" size={20} color={"#03c04a"}/>
                <h2>Reservation confirmed</h2>
              </div>
              <div className="reservation-show-reservation-details">
                <div className="reservation-show-res-details-size">
                  <FaRegUser className="reservation-fa-reg-user" size={20} />
                  <span>{reservation.party_size}</span>&nbsp;
                </div>
                <div>
                  <FaRegCalendar className="reservation-fa-reg-calendar" size={20} />
                  <span>{displayDate} at {reservation.time}</span>
                </div>
              </div>
              <div className="reservation-show-links">
                <Link to={`/booking/modify/${reservation.id}`}>Modify</Link>
                <Link to={`/booking/cancel/${reservation.id}`}>Cancel</Link>
              </div>
            </div>
          </div>
        </div>

        {/* <div>
          <h3>Who's going?</h3>
          <h3>{currentUser.fname} {currentUser.lname}</h3>
          <h3>Me Host</h3>
        </div> */}
        
        <div className="reservation-show-extra-info">
          <h2>What to know before you go</h2>
          <a href={`https://www.google.com/maps/dir/?api=1&destination=${restaurant.address}`} target="_blank">
            <span id="restaurant-show-map-address">
              <h3><FaDirections color={"#da3743"}/>  Get directions</h3>
              </span>
          </a>
        </div>
      </div>
    )
  }
}

export default withRouter(ReservationShow);