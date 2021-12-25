import React from "react";
import { Link } from "react-router-dom";
import { timeSlots } from "../../util/reservation_util";
import { FaRegCalendar, FaRegClock, FaRegUser, FaSearch, FaUtensils, FaLocationArrow} from "react-icons/fa"
import { timezone, today, todayDate } from "../../util/reservation_util"

class SearchBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      partySize: 2,
      date: todayDate,
      time: "6:30 PM",
      query: "",
      searching: false
    };
    localStorage.setItem("time", "6:30 PM");
    this.handleInput = this.handleInput.bind(this)
    this.handleSearchInput = this.handleSearchInput.bind(this)
    this.handleDateInput = this.handleDateInput.bind(this)
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
      localStorage.setItem(type, e.target.value);
    }
  }

  handleDateInput(){
    return (e) => {
      let newDate = new Date(e.target.value.toLocaleString("en-US", {
        timeZone: timezone,
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      })).toJSON().slice(0, 10)
      this.setState({ date: newDate})
      localStorage.setItem("date", newDate);
    }
  }

  handleSearchInput() {
    return (e) => {
      this.setState({ query: e.target.value });
      this.setState({searching: true});
      localStorage.setItem("query", e.target.value);
      // debugger
    }
  }

  render(){

    const { closeModal } = this.props

    const timeOptions = timeSlots.map((time, i) => (
      <option key={i} value={time}>{time}</option>
      )
    )

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
            <Link to={`/search/${cuisine}`} onClick={closeModal}>{cuisine}</Link>
          </div>
        ))}
      </div>)

    const cityList = (filteredCities.length === 0 ) ? null : 
      (<div>
        <div className="search-suggestions-title">
          <FaLocationArrow className="search-fa-location" size={18} />
          Cities
        </div>
        {filteredCities.map((city,i)=>(
          <div className="search-suggestions-list" key={i}>
            <Link to={`/search/${city}`} onClick={closeModal}>{city}</Link>
          </div>
        ))}
      </div>)

    const searchSuggestions = (!this.state.searching || this.state.query === "") ? null :
      (<div className="search-suggestions">
          <div className="search-suggestions-query">
          <Link id="search-suggestions-query" to={`/search/${this.state.query}`} onClick={closeModal}>Search: "{this.state.query}"</Link>
          </div>
          {cuisineList}
          {cityList}
        </div>)


    return(
      <div className="modal-content">
        <div onClick={closeModal} className="close-x">X</div>

        <div className="modal-search-box">
          <h1>Find your table for any occasion</h1>

          <div className="modal-search-box-form-container">
            <div>
              <div className="modal-search-box-form">
                <div className="modal-search-box-form-inputs-1">
                  <div className="search-box-form-date">
                    <FaRegCalendar className="fa-reg-calendar" size={20} />
                    <input id="date-input" type="date" value={new Date(this.state.date).toJSON().slice(0, 10)} min={todayDate}
                      onChange={this.handleDateInput()} />
                  </div>
                  <div className="search-box-form-time">
                    <FaRegClock className="fa-reg-clock" size={20} />
                    <select id="time-input" defaultValue="6:30 PM" onChange={this.handleInput("time")}>
                      {timeOptions}
                    </select>
                  </div>
                  <div className="search-box-form-size">
                    <FaRegUser className="fa-reg-user" size={20} />
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

                <div className="modal-search-box-form-inputs-2-wrapper">
                  <div className="modal-search-box-form-inputs-2">
                    <FaSearch className="fa-reg-search" size={20} />
                    <input
                      id="search-input"
                      type="text"
                      placeholder="Cuisine or City"
                      value={this.state.query}
                      onChange={this.handleSearchInput()}
                    />
                  </div>
                  {searchSuggestions}
                </div>


                <div className="modal-search-box-form-button">
                  <Link 
                    to={`/search/${this.state.query}`}
                    onClick={closeModal}
                  >Let's go</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    )
  }
}

export default SearchBox