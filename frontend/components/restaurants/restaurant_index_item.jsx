import React from "react";
import { Link } from "react-router-dom";
import Times from "../times/times";

class RestaurantIndexItem extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const {restaurant} = this.props
    return (
      <div className="restaurant-item">
        <div className="restaurant-left">
          <div className="restaurant-image">
            <img src={restaurant.photoUrls[0]} alt="restaurant-image" id="restaurant-image" />
          </div>
        </div>

        <div className="restaurant-right">
          <div className="restaurant-info">
            <div className="restaurant-name">
              <Link to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link>
            </div>
            <div className="restaurant-info-details">
              <li><span>{restaurant.category}</span></li>
              <li><span>{restaurant.city}</span></li>
            </div>
          </div>

          <div className="restaurant-times">
            <Times time={this.props.time} restaurant={restaurant} />
          </div>
        </div>
      </div>
    )
  }
}

export default RestaurantIndexItem;