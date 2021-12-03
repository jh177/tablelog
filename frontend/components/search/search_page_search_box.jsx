import React from "react";
import { Link } from "react-router-dom";
import { timeSlots } from "../../util/reservation_util";
import { FaRegCalendar, FaRegClock, FaRegUser, FaSearch } from "react-icons/fa"


let today = new Date().toJSON().slice(0, 10);

class SearchPageSearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      partySize: localStorage.getItem("partySize"),
      date: localStorage.getItem("date"),
      time: localStorage.getItem("time"),
      searchTerm: ""
    };
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    }
  }

  render() {

    const timeOptions = timeSlots.map((time, i) => (
      <option key={i} value={time}>{time}</option>
    ))

    // debugger

    return (
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
              <select value={localStorage.getItem("time")} onChange={this.handleInput("time")}>
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
              value={this.state.searchTerm}
              onChange={this.handleInput("searchTerm")}
            />
            <Link to={{
              pathname: `/search/${this.state.searchTerm}`,
              state: {
                date: this.state.date,
                time: this.state.time,
                partySize: this.state.partySize,
                searchTerm: this.state.searchTerm
              }
            }}>Find a Table</Link>
          </form>
        </div>
      </div>
    )
  }
}

export default SearchPageSearchBox;