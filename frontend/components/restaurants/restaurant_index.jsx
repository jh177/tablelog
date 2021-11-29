import React from "react";
import RestaurantIndexItem from "./restaurant_index_item";
import Times from "../times/times";

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

  // componentWillReceiveProps(props) {
  //   this.setState({ searchTerm: props.searchTerm })
  // }

  // componentDidUpdate(){
  //   this.props.requestRestaurants(this.state.searchTerm);
  // }

  render(){

    // debugger
    
    const restaurantItems = this.props.restaurants.map((restaurant, i) => (
      <li key={i}>
        <RestaurantIndexItem key={restaurant.id} restaurant={restaurant}/>
        <Times key={i+10000} time={this.props.time} restaurant={restaurant}/>
      </li>
      
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