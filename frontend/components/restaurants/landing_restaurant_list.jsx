import React, {useRef} from "react";
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
    this.listRef = React.createRef();
    this.scrollLeft = this.scrollLeft.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
  }

  componentDidMount() {
    this.props.requestRestaurants(this.state.query);
  }

  scrollLeft(){
    this.listRef.current.scrollBy({top: 0, left: -600, behavior: "smooth"})
  }

  scrollRight(){
    this.listRef.current.scrollBy({top: 0, left: 500, behavior: "smooth"})
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
          <div>
          <button className="scroll-btn" onClick={this.scrollLeft}>❮</button>
            {/* <FaChevronCircleLeft size={32} onClick={this.scrollLeft}/> */}
          </div>
        <div className="landing-restaurant-list" ref={this.listRef}>
          {LandingListItems}
        </div>
          <div>
          <button className="scroll-btn" onClick={this.scrollRight}>❯</button>
            {/* <FaChevronCircleRight size={32} onClick={this.scrollRight}/> */}
          </div>
      </div>
    )
  }
}

export default LandingRestaurantList;