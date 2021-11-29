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
      time: "12:00 AM",
      filter: ""
    };
    this.handleInput = this.handleInput.bind(this)

  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    }
  }

  render(){

    const timeOptions = timeSlots.map((time, i) => (
      <option key={i} value={time}>{time}</option>
    ))

    return(
      <div className="search-box">
        <h1>Find your table for any occasion</h1>
        <div>
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
            <label htmlFor="party-size">Party Size
              <select value={this.state.partySize} onChange={this.handleInput("partySize")}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </label>
          </form>
        </div>

        <div>
          <form>
            <input 
              type="text" 
              placeholder="Location or Cuisine"
              value={this.state.filter}
              onChange={this.handleInput("filter")}
            />
            <Link to={{
              pathname: `/search/${this.state.filter}`,
              state: {
                date: this.state.date,
                time: this.state.time,
                partySize: this.state.partySize,
                filter: this.state.filter
              }
            }}>Let's go</Link>
          </form>
        </div>
      </div>
    )
  }
}

export default SearchBox