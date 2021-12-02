import React from "react";
import { Link } from "react-router-dom";
import Times from "../times/times";
import { withRouter } from "react-router";
import { FaStar, FaBook, FaRegStar} from "react-icons/fa";

class LandingRestaurantListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  displayRatings(rating){
    
    const starWidth = rating*16;
    return (
      <div className="landing-list-stars">
        <div className="stars-outer">
          <FaRegStar color={"#e4e5e9"} size={16}/>
          <FaRegStar color={"#e4e5e9"} size={16}/>
          <FaRegStar color={"#e4e5e9"} size={16}/>
          <FaRegStar color={"#e4e5e9"} size={16}/>
          <FaRegStar color={"#e4e5e9"} size={16}/>

          <div className="stars-inner" style={{ width: `${starWidth}px`}}>
            <FaStar color={"#da3743"} size={16}/>
            <FaStar color={"#da3743"} size={16}/>
            <FaStar color={"#da3743"} size={16}/>
            <FaStar color={"#da3743"} size={16}/>
            <FaStar color={"#da3743"} size={16}/>
          </div>
        </div >
      </div>
    )
  }

  handleClick(e){
    // console.log("yes")
    e.stopPropagation();
    this.props.history.push(`/restaurants/${this.props.restaurant.id}`);
  }

  render() {
    const { restaurant } = this.props
    return (
      <div className="landing-restaurant-item-main">
        <div className="landing-restaurant-item">
          <div className="landing-restaurant-top">
            <div className="landing-restaurant-image" onClick={this.handleClick}>
              <img src={restaurant.photoUrls[0]} alt="restaurant-image" id={`landing-restaurant-image-${restaurant.id}`} />
            </div>
          </div>

          <div className="landing-restaurant-bottom">
            <div className="landing-restaurant-info" onClick={this.handleClick}>
              <div className="landing-restaurant-name">
                {restaurant.name}
              </div>
              <div className="landing-restaurant-ratings" onClick={this.handleClick}>
                {this.displayRatings(restaurant.average_rating)}
                <div className="landing-restaurant-num-reviews">
                  <p>{restaurant.num_reviews} reviews</p>
                </div>
              </div>
              <div className="landing-restaurant-details">
                <span>{restaurant.category}</span>
                <span>{restaurant.city}</span>
              </div>
              <div className="landing-restaurant-booked">
                <span><FaBook/> Booked {restaurant.num_reservations} times</span>
              </div>
            </div>

            <div className="landing-restaurant-times">
              <Times time={this.props.time} restaurant={restaurant} 
                onClick={e => e.stopPropagation()}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(LandingRestaurantListItem);