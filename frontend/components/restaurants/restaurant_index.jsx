import React from "react";
import RestaurantIndexItem from "./restaurant_index_item";
import Times from "../times/times";

class RestaurantIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchTerm: localStorage.getItem("searchTerm"),
      // updated: this.props.updated
    }
    this.prevUpdatedStatus = this.props.updated
    this.prevTime = this.props.time
  }

  componentDidMount(){
    this.props.requestRestaurants(this.state.searchTerm);
  }

  // componentWillReceiveProps(props) {
  //   this.setState({ searchTerm: props.searchTerm })
  // }

  componentDidUpdate(prevProps, prevState){
    // debugger
    this.prevUpdatedStatus = prevProps.updated
    this.prevTime = prevProps.time
    if (this.props.updated !== prevProps.updated) {
      this.props.requestRestaurants(this.props.searchTerm)
        .then(console.log(this.props.restaurants))
    }
    // debugger
  }

  render(){

    // debugger
    let time;

    if (this.prevUpdatedStatus !== this.props.updated) {
      time=this.props.time
    } else {
      time=this.prevTime
    }
    
    const restaurantItems = this.props.restaurants.map((restaurant, i) => (
      <li key={i}>
        <RestaurantIndexItem key={restaurant.id} restaurant={restaurant}/>
        <Times key={i+10000} time={time} restaurant={restaurant}/>
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