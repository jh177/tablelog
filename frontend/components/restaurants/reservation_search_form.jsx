import React from "react";
import { timeSlots } from "../../util/reservation_util";

let today = new Date().toJSON().slice(0, 10);

class ReservationSearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      partySize: 2,
      date: today,
      time: ""
    }
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(type) {
    return (e) => {
    this.setState({ [type]: e.target.value });
    }
  }

  render() {
    const {currentUser, openModal} = this.props
    
    let timeOptions = timeSlots.map((time, i)=>(
      <option key={i} value={time}>{time}</option>
    ))

    // const sessionButtons = () => (
      
    // )
    
    const button = currentUser ? 
      (<button>
        Find a table
      </button>) : (
      <nav className="login-signup">
        <button onClick={() => openModal('signup')} id="btn-sign-up">Sign up</button>
        <button onClick={() => openModal('login')} id="btn-sign-in">Sign in</button>
      </nav>
      )

    return (
      <div className="restaurant-show-reservation-search">
        <h2>Make a reservation</h2>
        
        <form className="restaurant-show-reservation-search-form"></form>
          <label htmlFor="party-size">Party Size
          <select value={this.state.partySize} onChange={this.handleInput("partySize")}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
          <br />
          <label htmlFor="date">Date
            <input type="date" value={this.state.date} min={today} 
            onChange={this.handleInput("date")}/>
          </label>
          <br />
          <label htmlFor="time">Time
            <select onChange={this.handleInput("time")}>
              {timeOptions}
            </select>
          </label>
          <br />
          {button}
          {/* {options} */}
      </div>
    )
  }

}

export default ReservationSearchForm;




