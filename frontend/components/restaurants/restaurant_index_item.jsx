import React from "react";
import { Link } from "react-router-dom";
import Times from "../times/times";
import TimesContainer from "../times/times_container";
import { FaStar, FaBook, FaRegStar } from "react-icons/fa";

class RestaurantIndexItem extends React.Component{
  constructor(props){
    super(props)
  }

  displayRatings(rating) {

    const starWidth = rating * 16;
    return (
      <div className="restaurant-list-stars">
        <div className="stars-outer">
          <FaRegStar color={"#e4e5e9"} size={16} />
          <FaRegStar color={"#e4e5e9"} size={16} />
          <FaRegStar color={"#e4e5e9"} size={16} />
          <FaRegStar color={"#e4e5e9"} size={16} />
          <FaRegStar color={"#e4e5e9"} size={16} />

          <div className="stars-inner" style={{ width: `${starWidth}px` }}>
            <FaStar color={"#da3743"} size={16} />
            <FaStar color={"#da3743"} size={16} />
            <FaStar color={"#da3743"} size={16} />
            <FaStar color={"#da3743"} size={16} />
            <FaStar color={"#da3743"} size={16} />
          </div>
        </div >
      </div>
    )
  }

  render(){
    const {restaurant} = this.props
    return (
      <div className="restaurant-item">
        <div className="restaurant-left">
          <div className="restaurant-image">
            <img src={restaurant.photoUrl} alt="restaurant-image" id={`restaurant-image-${restaurant.id}`} />
          </div>
        </div>

        <div className="restaurant-right">
          <div className="restaurant-info">
            <div className="restaurant-name">
              <Link to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link>
            </div>
            <div className="restaurant-ratings">
              {this.displayRatings(restaurant.average_rating)}
              <div className="restaurant-num-reviews">
                <p>{restaurant.num_reviews} reviews</p>
              </div>
            </div>
            <div className="restaurant-info-details">
              <span>{restaurant.category}</span>
              <span>{restaurant.city}</span>
            </div>
            <div className="restaurant-booked">
              <span><FaBook /> Booked {restaurant.num_reservations} times</span>
            </div>
          </div>

          <div className="restaurant-times">
            <TimesContainer time={this.props.time} restaurant={restaurant} />
          </div>
        </div>
      </div>
    )
  }
}

export default RestaurantIndexItem;