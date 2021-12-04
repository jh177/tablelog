import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { FaRegCalendar, FaRegUser, FaRegClock, FaDirections} from "react-icons/fa"


class ReservationForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      phone: ""
      // time: "",
      // date: new Date().toJSON().slice(0, 10),
      // partySize: 0,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.navigateToReservationView = this.navigateToReservationView.bind(this);
  }

  componentDidMount(){
    this.props.requestRestaurant(this.props.match.params.restaurantId);
  }

  componentWillUnmount() {
    this.props.removeReservationErrors();
  }
  // navigateToReservationView(){
  //   const url = `/booking/view/${this.props.restaurant.id}`
  //   this.props.history.push(url)
  // }

  handleSubmit(e){
    
    e.preventDefault();
    const reservation = Object.assign({}, this.state, {
      user_id: this.props.currentUser.id,
      restaurant_id: this.props.restaurant.id,
      date: new Date(localStorage.getItem("date")),
      time: localStorage.getItem("time"),
      party_size: parseInt(localStorage.getItem("partySize")),
      email: this.props.currentUser.email
    })
    this.props.createReservation(reservation)
      .then((response) => {
        // debugger
        this.props.history.push(`/booking/view/${Object.keys(response.payload.reservation)[0]}`)
      })
    // this.navigateToReservationView()
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    }
  }


  render(){

    // debugger

    if (!this.props.restaurant) {return null}
    // let restaurant;

    // if (this.props.restaurant) { 
    //   restaurant = this.props.restaurant
    //   localStorage.setItem("restaurant", JSON.stringify(this.props.restaurant));

    // } else {
    //   restaurant = JSON.parse(window.localStorage.getItem("restaurant"))
    // }
    const {restaurant} = this.props

    let date;
    let time;
    let partySize;

    if (this.props.location.state) {
      date = this.props.location.state.date;
      localStorage.setItem("date", date);
      time = this.props.location.state.time;
      localStorage.setItem("time", time);
      partySize = this.props.location.state.partySize;
      localStorage.setItem("partySize", partySize);
    } else {
      date = localStorage.getItem("date");
      time = localStorage.getItem("time");
      partySize = localStorage.getItem("partySize");
    }
    // localStorage.setItem("restaurant", JSON.stringify(this.props.restaurant));
    // debugger
    let displayDate = new Date(date).toString().slice(0, 15);

    let restaurantPhotoUrl = (restaurant.photoUrl) ? restaurant.photoUrl : restaurant.photoUrls[0]

    return (
      <div className="reservation-page-main">
        <div className="reservation-form">
          <h2>You're almost done!</h2>

          <div className="reservation-details">
            <div className="reservation-details-left">
              <img src={restaurantPhotoUrl} alt="restaurant-image" />
            </div>
            <div className="reservation-details-right">
              <div className="reservation-details-restaurant-name">
                <Link to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link>
              </div>
              <div className="reservation-details-date-time">
                <div className="reservation-details-date">
                  <FaRegCalendar className="fa-reg-calendar" size={20} />
                  <p>{displayDate}</p>
                </div>
                <div className="reservation-details-time">
                  <FaRegClock className="fa-reg-clock" size={20} />

                  <p>{time}</p>
                </div>
                <div className="reservation-details-party-size">
                  <FaRegUser className="fa-reg-user" size={20} />
                  <p>{partySize} people</p>
                </div>
              </div>
            </div>
          </div>

          <h2 id="diner-details">Diner Details</h2>

          <div className="diner-name">{this.props.currentUser.fname} {this.props.currentUser.lname}</div>

          <div className="reservation-diner-details">
            <div className="reservation-diner-details-phone-email">
              <div className="reservation-diner-details-phone">
                <input 
                  type="phone"
                  placeholder="Phone Number"
                  value={this.state.phone}
                  onChange={this.handleInput('phone')}
                />
              </div>
              <div className="reservation-diner-details-email">
                <input value={this.props.currentUser.email} disabled="disabled"/>
              </div>
            </div>

            <div className="reservation-error">{this.props.errors}</div>

            <button
              id="reservation-diner-button"
              type="submit"
              // value="Complete Reservation"
              onClick={this.handleSubmit}>Complete Reservation</button>
          </div>
        </div>

        <div className="reservation-extra-info">
          <h2>What to know before you go</h2>
          <div>
            <a href={`https://www.google.com/maps/dir/?api=1&destination=${restaurant.address}`} target="_blank">
              <span id="restaurant-show-map-address">
                <h3><FaDirections color={"#da3743"}/>  Get directions</h3>
                </span>
            </a>
          </div>
        </div>
      </div>
    )
  }

}

export default withRouter(ReservationForm);