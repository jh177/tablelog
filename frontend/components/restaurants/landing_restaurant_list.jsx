import React from "react";
import LandingRestaurantListItem from "./landing_restaurant_list_item";
import { timeSlots, timezone, today, todayDate, todayTimeSlots } from "../../util/reservation_util";

class LandingRestaurantList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      time: todayTimeSlots[0],
      date: todayDate,
      partySize: 2
    }
  }

  componentDidMount() {
    this.props.requestRestaurants(this.state.query);
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
      <div className="landing-restaurant-list-main">
        <div className="landing-restaurant-list">
          {LandingListItems}
        </div>
      </div>
    )
  }
}

export default LandingRestaurantList;