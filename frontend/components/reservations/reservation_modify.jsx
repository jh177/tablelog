import React from "react";
import { timeSlots } from "../../util/reservation_util";
import { Link } from "react-router-dom";
import { FaRegCalendar, FaRegClock, FaRegUser} from "react-icons/fa"
import { timezone, today, todayDate } from "../../util/reservation_util"

class ReservationModify extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      partySize: localStorage.getItem("partySize"),
      date: todayDate,
      time: localStorage.getItem("time"),
      timeAvails: []
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleDateInput = this.handleDateInput.bind(this);
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

  handleDateInput() {
    return (e) => {
      let newDate = new Date(e.target.value.toLocaleString("en-US", {
        timeZone: timezone,
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      })).toJSON().slice(0, 10)
      this.setState({ date: newDate })
      localStorage.setItem("date", newDate);
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

    let dateInfo = reservation.date.split("-")
    let displayDate = new Date(dateInfo[0], dateInfo[1] - 1, dateInfo[2]).toString().slice(0, 15);

        // debugger

    return(
      <div className="reservation-modify-main">
        <div className="reservation-modify-info">
          <h2>Your current reservation</h2>

          <div className="reservation-modify-details">
            <div className="reservation-modify-details-left">
              <img src={restaurant.photoUrl} alt="restaurant-image" />
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

          <h3 className="modify-page-hint">Modify your reservation</h3>


          <div className="modify-page-form">

            <div className="modify-page-form-inputs-1">

              <div className="modify-page-form-date">
                <FaRegCalendar className="fa-reg-calendar" size={20} />
                <input 
                  type="date" 
                  id="modify-page-date-input"
                  value={new Date(this.state.date).toJSON().slice(0, 10)} 
                  min={todayDate}
                  onChange={this.handleDateInput()} />
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
        </div>

        <div className="reservation-modify-extra-info">
        </div>

      </div>
    )
  }
}

export default ReservationModify;