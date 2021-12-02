import React from "react";
import { Link } from "react-router-dom";
import Times from "../times/times";
import {FaStar, FaUtensils} from "react-icons/fa"

class LandingRestaurantListItem extends React.Component {
  constructor(props) {
    super(props)
  }

  displayRatings(rating){
    
    return (
      <div className="landing-list-stars">
        <FaStar/>
      </div>
    )
  }

  render() {
    const { restaurant } = this.props
    return (
      <Link 
        to={`/restaurants/${restaurant.id}`} 
        className="landing-restaurant-item-main"
      >
        <div className="landing-restaurant-item">
          <div className="landing-restaurant-top">
            <div className="landing-restaurant-image">
              <img src={restaurant.photoUrls[0]} alt="restaurant-image" id={`landing-restaurant-image-${restaurant.id}`} />
            </div>
          </div>

          <div className="landing-restaurant-bottom">
            <div className="landing-restaurant-info">
              <div className="landing-restaurant-name">
                {restaurant.name}
              </div>
              <div className="landing-restaurant-ratings">
                {this.displayRatings(restaurant.avg_rating)}
                <div>
                  <p>{restaurant.num_reviews} reviews</p>
                </div>
              </div>
              <div className="landing-restaurant-details">
                <span>{restaurant.category}</span>
                <span>{restaurant.city}</span>
              </div>
              <div className="landing-restaurant-booked">
                <span><FaUtensils/> Booked {restaurant.num_reservations} times</span>
              </div>
            </div>

            <div className="landing-restaurant-times">
              <Times time={this.props.time} restaurant={restaurant} />
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

export default LandingRestaurantListItem;