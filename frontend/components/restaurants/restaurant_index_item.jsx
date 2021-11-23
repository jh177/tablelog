import React from "react";

class RestaurantIndexItem extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const {restaurant} = this.props
    return (
      <li>
        <h3>{restaurant.name}</h3>
        <span>{restaurant.category}</span>
        <span>{restaurant.city}</span>
      </li>
    )
  }
}

export default RestaurantIndexItem;