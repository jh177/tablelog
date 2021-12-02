import React from "react";
import { Link } from "react-router-dom";
import Times from "../times/times";

class LandingRestaurantListItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { restaurant } = this.props
    return (
      <div className="landing-restaurant-item">
        <div className="landing-restaurant-left">
          <div className="landing-restaurant-image">
            <img src={restaurant.photoUrls[0]} alt="restaurant-image" id={`landing-restaurant-image-${restaurant.id}`} />
          </div>
        </div>

        <div className="landing-restaurant-right">
          <div className="landing-restaurant-info">
            <div className="landing-restaurant-name">
              <Link to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link>
            </div>
            <div className="landing-restaurant-info-details">
              <li><span>{restaurant.category}</span></li>
              <li><span>{restaurant.city}</span></li>
            </div>
          </div>

          <div className="landing-restaurant-times">
            <Times time={this.props.time} restaurant={restaurant} />
          </div>
        </div>
      </div>
    )
  }
}

export default LandingRestaurantListItem;