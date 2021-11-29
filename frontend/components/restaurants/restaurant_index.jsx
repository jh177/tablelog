import React from "react";
import RestaurantIndexItem from "./restaurant_index_item";

class RestaurantIndex extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.requestRestaurants(localStorage.getItem("searchTerm"));
  }

  render(){
    const restaurantItems = this.props.restaurants.map((restaurant) => (
      <RestaurantIndexItem key={restaurant.id} restaurant={restaurant}/>
    ))

    return(
      <div className="restaurant-list-container">
        <ul>{restaurantItems}</ul>
      </div>
    )
  }
}

export default RestaurantIndex;