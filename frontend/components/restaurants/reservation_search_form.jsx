import React from "react";
import { timeSlots } from "../../util/reservation_util";
import {Link} from "react-router-dom";
import { ProtectedRoute, AuthRoute } from "../../util/route_util";
import ReservationForm from "../../components/reservations/reservation_form"
import { timezone, today, todayDate } from "../../util/reservation_util"


class ReservationSearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      partySize: parseInt(localStorage.getItem("partySize")),
      date: localStorage.getItem("date"),
      time: "6:30 PM",
      timeAvails: []
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleClickFind = this.handleClickFind.bind(this);
    this.handleDateInput = this.handleDateInput.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
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

  handleClickFind(){
    let index = timeSlots.indexOf(this.state.time)
    let times = []
    for (let i=0; i<=2; i++){
      times.push(timeSlots[(index+i)%48])
    }
    this.setState({timeAvails: times})
  }

  render() {
    const {currentUser, openModal} = this.props
    
    const timeOptions = timeSlots.map((time, i)=>(
      <option key={i} value={time}>{time}</option>
    ))
    
    const button = currentUser ? 
      (<button id="res-show-find-table" onClick={this.handleClickFind}>
        Find a table
      </button>) : (
      <div className="res-show-login-signup">
        <nav className="login-signup">
          <button onClick={() => openModal('signup')} id="btn-sign-up">Sign up</button>
          <button onClick={() => openModal('login')} id="btn-sign-in">Sign in</button>
        </nav>
      </div>
      )

        // debugger

    const options = this.state.timeAvails ? (
      this.state.timeAvails.map((time, i) => (
        <Link to={{
          pathname: `/booking/${this.props.restaurant.id}`,
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

    // const prompt = this.state.timeAvails ? ( <p>Select a time:</p>) : (<p>Sorry. Please try another date and time.</p>)

    // debugger

    return (
      <div className="restaurant-show-reservation-search">
        <div className="restaurant-show-reservation-search-title">
          <h3>Make a reservation</h3>
        </div>
        
        <div className="restaurant-show-reservation-search-form">
          <div className="res-show-reservation-search-form-size">
            <p>Party Size</p>
            <select id="res-show-size-input" value={this.state.partySize} onChange={this.handleInput("partySize")}>
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
          <div className="res-show-search-input-date-time">
            <div className="res-show-search-search-form-date">
              <p>Date</p>
              <div id="date-input-wrapper">
                <input id="res-show-date-input"
                  type="date" 
                  value={new Date(this.state.date).toJSON().slice(0, 10)} 
                  min={todayDate}
                  onChange={this.handleInput("date")} />
              </div>
            </div>
            <div className="res-show-search-search-form-time">
              <p>Time</p>
              <select 
                id="res-show-time-input"
                value={this.state.time}
                onChange={this.handleInput("time")}>
                {timeOptions}
              </select>
            </div>
          </div>

          {button}
          {/* <ProtectedRoute
            path="/booking/:restaurantId"
            component={ReservationForm}
          /> */}
        </div>
        {/* {prompt} */}
        <div className="res-show-search-times-links">
          {options}
        </div>
      </div>
    )
  }
}

export default ReservationSearchForm;




