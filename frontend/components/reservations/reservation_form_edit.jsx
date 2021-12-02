import React from "react";
import { withRouter } from "react-router";

class ReservationFormEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // this.props.requestRestaurant(this.props.match.params.restaurantId);
    this.props.requestReservation(this.props.match.params.reservationId);
  }


  handleSubmit(e) {
    e.preventDefault();
    const reservation = Object.assign({}, this.props.reservation)
    reservation["phone"] = this.state.phone;
    reservation["date"] = new Date(localStorage.getItem("date"));
    reservation["time"] = localStorage.getItem("time");
    reservation["party_size"] = parseInt(localStorage.getItem("partySize"));
    console.log(reservation)
    this.props.updateReservation(reservation)
      .then((response) => {
        console.log(response)
        this.props.history.push(`/booking/view/${response.payload.reservation.id}`)
      })
    // this.navigateToReservationView()
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    }
  }


  render() {
    if (!this.props.reservation || !this.props.restaurant) {
      return null;
    }

    if (this.props.reservation.user_id !== this.props.currentUser.id) {
      this.props.history.push("/")
    }

    const { restaurant } = this.props

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
    let displayDate = new Date(date).toString().slice(0,15);

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
          <input type="submit" value="Complete Reservation" />
        </form>
      </div>
    )
  }

}

export default withRouter(ReservationFormEdit);