import React from "react";
import { timeSlots } from "../../util/reservation_util";
import { Link } from "react-router-dom";
import { FaRegCalendar, FaRegClock, FaRegUser} from "react-icons/fa"

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
      localStorage.setItem(type, e.target.value);
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

    let displayDate = new Date(reservation.date).toString().slice(0, 15);

        // debugger

    return(
      <div className="reservation-modify-main">
        <div className="reservation-modify-info">
          <h2>Your current reservation</h2>
          <div className="reservation-modify-details">
            <div className="reservation-modify-details-left">
              <img src={restaurant.photoUrls[0]} alt="restaurant-image" />
            </div>
            <div className="reservation-modify-details-right">
              <div className="reservation-modify-details-restaurant-name">
                <Link to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link>
              </div>
              <div className="reservation-modify-details-date-time">
                <div className="reservation-modify-details-date">
                  <FaRegCalendar className="fa-reg-calendar" size={20} />
                  <p>{displayDate}</p>
                </div>
                <div className="reservation-modify-details-time">
                  <FaRegClock className="fa-reg-clock" size={20} />

                  <p>{reservation.time}</p>
                </div>
                <div className="reservation-modify-details-party-size">
                  <FaRegUser className="fa-reg-user" size={20} />
                  <p>{reservation.partySize} people</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3>Modify your reservation</h3>


        <div className="modify-page-form">

          <div className="modify-page-form-inputs-1">

            <div className="modify-page-form-date">
              <FaRegCalendar className="fa-reg-calendar" size={20} />
              <input type="date" value={this.state.date} min={today}
                onChange={this.handleInput("date")} />
            </div>

            <div className="modify-page-form-time">
              <FaRegClock className="fa-reg-clock" size={20} />
              <select
                id="modify-page-time-input"
                value={this.state.time}
                onChange={this.handleInput("time")}>
                {timeOptions}
              </select>
            </div>

            <div className="modify-page-form-size">
              <FaRegUser className="fa-reg-user" size={20} />
              <select
                id="modify-page-size-input"
                value={this.state.partySize}
                onChange={this.handleInput("partySize")}>
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5">5 People</option>
                <option value="6">6 People</option>
                <option value="7">7 People</option>
                <option value="8">8 People</option>
                <option value="9">9 People</option>
                <option value="10">10 People</option>
              </select>
            </div>
          </div>

          <div className="modify-page-form-button">
            <button
              type="submit"
              // id="modify-page-find-btn"
              onClick={this.handleClickFind}>
              <h2>Find a Table</h2>
            </button>
          </div>
        </div>

        <div className="modify-page-time-options">
          {options}
        </div>
{/* 
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
        {options} */}

      </div>
    )
  }
}

export default ReservationModify;