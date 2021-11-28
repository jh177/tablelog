import React from "react";
import { timeSlots } from "../../util/reservation_util";
import { Link } from "react-router-dom";


let today = new Date().toJSON().slice(0, 10);


class ReservationModify extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      partySize: localStorage.getItem("partySize"),
      date: localStorage.getItem("date"),
      time: localStorage.getItem("time"),
      timeAvails: []
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleClickFind = this.handleClickFind.bind(this)
  }

  componentDidMount() {
    this.props.requestReservation(this.props.match.params.reservationId);
    // this.props.requestRestaurant(this.props.match.params.restaurantId);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    }
  }

  handleClickFind() {
    let index = timeSlots.indexOf(this.state.time)
    let times = []
    for (let i = 0; i <= 2; i++) {
      times.push(timeSlots[(index + i) % 48])
    }
    this.setState({ timeAvails: times })
  }

  render(){

    // console.log(this.props)
    if (!this.props.reservation || !this.props.restaurant) {
      return null;
    }

    if (this.props.reservation.user_id !== this.props.currentUser.id) {
      this.props.history.push("/")
    }

    const { reservation, restaurant} = this.props;

    // debugger

    const timeOptions = timeSlots.map((time, i) => (
      <option key={i} value={time}>{time}</option>
    ))

    const options = this.state.timeAvails ? (
      this.state.timeAvails.map((time, i) => (
        <Link to={{
          pathname: `/booking/edit/${reservation.id}`,
          state: {
            restaurant: this.props.restaurant,
            date: this.state.date,
            time: time,
            partySize: this.state.partySize
          }
        }} key={i}>{time}</Link>
      )
      )
    ) : (null)

    return(
      <div>
        <h2>Your current reservation</h2>
        <br />
        <h1>{restaurant.name}</h1>
        <br />
        <span>{reservation.date}</span>&nbsp;
        <span>{reservation.time}</span>
        <span>{reservation.party_size}</span>&nbsp;
        <br />
        <h3>Modify your reservation</h3>

        <form>
          <label htmlFor="date">Date
            <input type="date" value={this.state.date} min={today}
              onChange={this.handleInput("date")} />
          </label>
          <br />
          <label htmlFor="time">Time
            <select onChange={this.handleInput("time")}>
              {timeOptions}
            </select>
          </label>
          <br />
          <button onClick={this.handleClickFind}>Find a new table</button>
        </form>
        {options}

      </div>
    )
  }
}

export default ReservationModify