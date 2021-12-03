import React from "react";
import SearchPageSearchBox from "./search_page_search_box";
import RestaurantIndexContainer from "../restaurants/restaurant_index_container";
import { Link } from "react-router-dom";
import { timeSlots } from "../../util/reservation_util";
import SearchPageNav from "./search_page_nav";
import { FaRegCalendar, FaRegClock, FaRegUser, FaSearch } from "react-icons/fa"


let today = new Date().toJSON().slice(0, 10);

class SearchPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      partySize: localStorage.getItem("partySize"),
      date: localStorage.getItem("date"),
      time: localStorage.getItem("time"),
      searchTerm: localStorage.getItem("searchTerm"),
      updated: false,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); 
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
      localStorage.setItem(type, e.target.value);
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({updated: !this.state.updated})
    // console.log(this.state.updated)
  }

  render(){

    // debugger

    const timeOptions = timeSlots.map((time, i) => (
      <option key={i} value={time}>{time}</option>
    ))

    // debugger

    return(
      <div className="search-page-container">

        <div className="search-page-header">
          <div className="search-page-form-container">
            <div>
              <div className="search-page-form">
                <div className="search-page-form-inputs-1">

                  <div className="search-page-form-date">
                    <FaRegCalendar className="fa-reg-calendar" size={20} />
                    <input type="date"
                      id="search-page-date-input"
                      value={this.state.date} 
                      min={today}
                      onChange={this.handleInput("date")} />
                  </div>

                  <div className="search-page-form-time">
                    <FaRegClock className="fa-reg-clock" size={20} />
                    <select
                      id="search-page-time-input"
                      value={this.state.time}
                      onChange={this.handleInput("time")}>
                      {timeOptions}
                    </select>
                  </div>

                  <div className="search-page-form-size">
                    <FaRegUser className="fa-reg-user" size={20} />
                    <select
                      id="search-page-size-input"
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

                <div className="search-page-form-inputs-2">
                  <FaSearch className="fa-reg-search" size={20} />
                  <input
                    id="search-page-search-input"
                    type="text"
                    placeholder="Location or Cuisine"
                    value={this.state.searchTerm}
                    onChange={this.handleInput("searchTerm")}
                  />
                </div>

                <div className="search-page-form-button">
                  <button
                    type="submit"
                    id="search-page-find-btn"
                    onClick={this.handleSubmit}>
                    <h2>Find a Table</h2>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        

        <div className="search-page-main">
          <div className="search-page-nav">
            <SearchPageNav/>
          </div>
          <div className="search-page-list">
            <RestaurantIndexContainer
              searchTerm={this.state.searchTerm}
              time={this.state.time}
              updated={this.state.updated}
            />
          </div>
        </div>

      </div>
    )
  }
}

export default SearchPage;