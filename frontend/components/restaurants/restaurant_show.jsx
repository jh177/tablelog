import React from "react";
import { Link } from "react-router-dom";

class RestaurantShow extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.requestRestaurant(this.props.match.params.restaurantId);
  }

  render(){
    if (!this.props.restaurant) {
      return null;
    }
    const {restaurant} = this.props
    return (
      <div>
        <h1>{restaurant.name}</h1>
        <span>{restaurant.category}</span>
        <p>{restaurant.description}</p>
        <p>{restaurant.address}</p>
        <p>{restaurant.city}</p>
      </div>
    )
  }
}

export default RestaurantShow;