import React from "react";
import RestaurantIndexItem from "./restaurant_index_item";

class RestaurantIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchTerm: localStorage.getItem("searchTerm")
    }
  }

  componentDidMount(){
    this.props.requestRestaurants(this.state.searchTerm);
  }

  componentWillReceiveProps(props) {
    this.setState({ searchTerm: props.searchTerm })
  }

  componentDidUpdate(){
    this.props.requestRestaurants(this.state.searchTerm);
  }

  render(){

    // debugger
    
    const restaurantItems = this.props.restaurants.map((restaurant) => (
      <RestaurantIndexItem key={restaurant.id} restaurant={restaurant}/>
    ))

    return(
      <div className="restaurant-list-container">
        <h2>{this.props.restaurants.length} restaurants available</h2>
        <br />
        <ul>{restaurantItems}</ul>
      </div>
    )
  }
}

export default RestaurantIndex;