import React from "react";
import { withRouter } from "react-router";

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
    window.reservation = reservation;
    this.props.createReservation(reservation)
      .then((response) => {
        this.props.history.push(`/booking/view/${response.reservation.id}`)
      })
    // this.navigateToReservationView()
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    }
  }


  render(){
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
    let displayDate = new Date(date).toLocaleString();

    return (
      <div>
        <h1>{restaurant.name}</h1>
        <h2>Date: {displayDate}</h2>
        <h2>Time: {time}</h2>
        <h2>Party Size: {partySize}</h2>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="phone">
            <input 
              type="phone"
              placeholder="Phone Number"
              value={this.state.phone}
              onChange={this.handleInput('phone')}
            />
          </label>
          <input type="submit" value="Complete Reservation"/>
        </form>
      </div>
    )
  }

}

export default withRouter(ReservationForm);