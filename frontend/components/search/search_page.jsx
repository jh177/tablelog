import React from "react";
import SearchPageSearchBox from "./search_page_search_box";
import RestaurantIndexContainer from "../restaurants/restaurant_index_container";
import { Link } from "react-router-dom";
import { timeSlots } from "../../util/reservation_util";


let today = new Date().toJSON().slice(0, 10);

class SearchPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      partySize: localStorage.getItem("partySize"),
      date: localStorage.getItem("date"),
      time: localStorage.getItem("time"),
      searchTerm: localStorage.getItem("searchTerm")
    };
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    }
  }

  render(){

    // debugger

    const timeOptions = timeSlots.map((time, i) => (
      <option key={i} value={time}>{time}</option>
    ))

    // debugger

    return(
      <div>
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
              <select value={this.state.time} onChange={this.handleInput("time")}>
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
            <button>Find a Table</button>
          </form>
        </div>
      </div>
      <br />

        <div>
          <RestaurantIndexContainer
            searchTerm={this.state.searchTerm}
            time={this.state.time}
          />
        </div>
      </div>
    )
  }
}

export default SearchPage;