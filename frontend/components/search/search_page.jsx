import React from "react";
import RestaurantIndexContainer from "../restaurants/restaurant_index_container";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { timeSlots } from "../../util/reservation_util";
import SearchPageNav from "./search_page_nav";
import { FaRegCalendar, FaRegClock, FaRegUser, FaSearch, FaUtensils, FaLocationArrow } from "react-icons/fa"
import {timezone, today, todayDate} from "../../util/reservation_util"

const defaultDate = (localStorage.date.length>0) ? localStorage.getItem("date") : todayDate 
const defaultTime = (localStorage.time.length>0) ? localStorage.getItem("time") : "6:30 PM"
const defaultSize = (localStorage.partySize !== "0") ? parseInt(localStorage.getItem("partySize")) : 2

class SearchPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      partySize: defaultSize,
      date: defaultDate,
      time: defaultTime,
      // query: localStorage.getItem("query"),
      query: "",
      updated: false,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleClickLink = this.handleClickLink.bind(this);
    this.handleDateInput = this.handleDateInput.bind(this)
  }

  // componentDidMount(){
  //   this.props.requestRestaurants(this.props.match.params.query)
  // }

  handleInput(type) {
    return (e) => {
      localStorage.setItem(type, e.target.value);
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

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.queryTerm !== this.props.match.params.query){
      this.setState({ updated: !this.state.updated})
    }
  }

  handleSearchInput() {
    return (e) => {
      this.setState({ query: e.target.value });
      this.setState({ searching: true });
      localStorage.setItem("query", e.target.value);
      // debugger
    }
  }

  handleSubmit(e){
    e.preventDefault();
    // debugger
    this.setState({updated: !this.state.updated, query:""})
    this.props.history.push(`/search/${this.state.query}`)
  }

  handleClickLink(){
    this.setState({ updated: !this.state.updated, query: "" })
  }

  render(){
    // debugger

    const timeOptions = timeSlots.map((time, i) => (
      <option key={i} value={time}>{time}</option>
    ))

    const cities = ["Irvine", "Newport Beach", "Beverly Hills", "Orange", "Torrance", "Los Angeles", "West Hollywood", "Long Beach", "Rosemead"]
    const cuisines = ["French", "Italian", "Chinese", "Mexican", "Thai", "Mediterranean", "Korean", "Japanese", "Indian"]

    const filteredCities = cities.filter(city => city.toLowerCase().includes(this.state.query))
    const filteredCuisines = cuisines.filter(cuisine => cuisine.toLowerCase().includes(this.state.query))

    const cuisineList = (filteredCuisines.length === 0) ? null :
      (<div>
        <div className="search-suggestions-title">
          <FaUtensils className="search-fa-utensils" size={18} />
          Cuisines
        </div>
        {filteredCuisines.map((cuisine, i) => (
          <div className="search-suggestions-list" key={i}>
            <Link to={`/search/${cuisine}`} onClick={this.handleClickLink}>{cuisine}</Link>
          </div>
        ))}
      </div>)

    const cityList = (filteredCities.length === 0) ? null :
      (<div>
        <div className="search-suggestions-title">
          <FaLocationArrow className="search-fa-location" size={18} />
          Cities
        </div>
        {filteredCities.map((city, i) => (
          <div className="search-suggestions-list" key={i}>
            <Link to={`/search/${city}`} onClick={this.handleClickLink}>{city}</Link>
          </div>
        ))}
      </div>)

    const searchSuggestions = (!this.state.searching || this.state.query === "") ? null :
      (<div className="search-suggestions">
        <div className="search-suggestions-query">
          <Link id="search-suggestions-query" to={`/search/${this.state.query}`} onClick={this.handleClickLink}>Search: "{this.state.query}"</Link>
        </div>
        {cuisineList}
        {cityList}
      </div>)



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
                      value={new Date(this.state.date).toJSON().slice(0, 10)} 
                      min={todayDate}
                      onChange={this.handleDateInput()} />
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
                      defaultValue={this.state.partySize}
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

                <div className="search-page-form-inputs-2-wrapper">
                  <div className="search-page-form-inputs-2">
                    <FaSearch className="fa-reg-search" size={20} />
                    <input
                      id="search-page-search-input"
                      type="text"
                      placeholder="Location or Cuisine"
                      value={this.state.query}
                      onChange={this.handleSearchInput()}
                    />
                  </div>
                  {searchSuggestions}
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
              query={this.props.match.params.query}
              time={this.state.time}
              updated={this.state.updated}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(SearchPage);