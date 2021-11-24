import React from "react";
import { Link } from "react-router-dom";

class RestaurantIndexItem extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const {restaurant} = this.props
    return (
      <li>
        <Link to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link>
        &nbsp;<span>{restaurant.category}</span>&nbsp;
        <span>{restaurant.city}</span>
      </li>
    )
  }
}

export default RestaurantIndexItem;