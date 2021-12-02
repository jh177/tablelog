import React from "react";
import { Link } from "react-router-dom";
import { timeSlots } from "../../util/reservation_util";

let today = new Date().toJSON().slice(0,10);

class SearchBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      partySize: 2,
      date: today,
      time: "6:30 PM",
      searchTerm: ""
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
                  <input id="date-input" type="date" value={this.state.date} min={today}
                    onChange={this.handleInput("date")} />
                </div>
                <div className="search-box-form-time">
                  <select id="time-input" defaultValue="6:30 PM" onChange={this.handleInput("time")}>
                    {timeOptions}
                  </select>
                </div>
                <div>
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
                <input
                  id="search-input"
                  type="text"
                  placeholder="Location or Cuisine"
                  value={this.state.searchTerm}
                  onChange={this.handleInput("searchTerm")}
                />
              </div>

              <div className="landing-search-box-form-button">
                <Link to={{
                  pathname: "/search",
                  // pathname: `/search/${this.state.searchTerm}`,
                  state: {
                    date: this.state.date,
                    time: this.state.time,
                    partySize: this.state.partySize,
                    searchTerm: this.state.searchTerm
                  }
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