import React from "react";
import { Link } from "react-router-dom";
import { timeSlots } from "../../util/reservation_util";
import { FaRegCalendar, FaRegClock, FaRegUser, FaSearch} from "react-icons/fa"

let today = new Date().toJSON().slice(0,10);

class SearchBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      partySize: 2,
      date: today,
      time: "6:30 PM",
      query: ""
    };
    localStorage.setItem("time", "6:30 PM");
    this.handleInput = this.handleInput.bind(this)

  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
      localStorage.setItem(type, e.target.value);
    }
  }

  render(){

    const timeOptions = timeSlots.map((time, i) => (
      <option key={i} value={time}>{time}</option>
      )
    )

    return(
      <div className="landing-search-box">
        <h1>Find your table for any occasion</h1>
        
        <div className="landing-search-box-form-container">
          <div>
            <div className="landing-search-box-form">
              <div className="landing-search-box-form-inputs-1">
                <div className="search-box-form-date">
                  <FaRegCalendar className="fa-reg-calendar" size={20}/>
                  <input id="date-input" type="date" value={this.state.date} min={today}
                    onChange={this.handleInput("date")} />
                </div>
                <div className="search-box-form-time">
                  <FaRegClock className="fa-reg-clock" size={20}/>
                  <select id="time-input" defaultValue="6:30 PM" onChange={this.handleInput("time")}>
                    {timeOptions}
                  </select>
                </div>
                <div className="search-box-form-size">
                  <FaRegUser className="fa-reg-user" size={20}/>
                  <select id="size-input" value={this.state.partySize} onChange={this.handleInput("partySize")}>
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

              <div className="landing-search-box-form-inputs-2">
                <FaSearch className="fa-reg-search" size={20} />
                <input
                  id="search-input"
                  type="text"
                  placeholder="Location or Cuisine"
                  value={this.state.query}
                  onChange={this.handleInput("query")}
                />
              </div>

              <div className="landing-search-box-form-button">
                <Link to={{
                  // pathname: `/search?q=${this.state.query}`,
                  pathname: `/search/${this.state.query}`,
                  // state: {
                  //   date: this.state.date,
                  //   time: this.state.time,
                  //   partySize: this.state.partySize,
                  //   query: this.state.query
                  // }
                }}>Let's go</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchBox