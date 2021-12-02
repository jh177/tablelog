import React from "react";
import LandingRestaurantListItem from "./landing_restaurant_list_item";

let today = new Date().toJSON().slice(0, 10);

class LandingRestaurantList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "Chinese",
      time: "6:30PM",
      date: today,
      partySize: 2
    }
  }

  componentDidMount() {
    this.props.requestRestaurants(this.state.searchTerm);
  }

  render() {

    if (!this.props.restaurants) return null;

    const LandingListItems = this.props.restaurants.map((restaurant, i) => (
      <div className="landing-restaurant-item-container" key={i}>
        <LandingRestaurantListItem
          key={restaurant.id}
          restaurant={restaurant}
          time={this.state.time}
          date={this.state.date}
          partySize={this.state.partySize}
        />
      </div>
    ))

    return (
      <div className="landing-restaurant-list-container">
        <div className="landing-restaurant-list-number">
          <h2>{this.props.restaurants.length} restaurants available</h2>
        </div>
        <div className="landing-restaurant-list">
          {LandingListItems}
        </div>
      </div>
    )
  }
}

export default LandingRestaurantList;