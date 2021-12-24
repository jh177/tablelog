import React from "react";
import RestaurantIndexItem from "./restaurant_index_item";
import Times from "../times/times";

class RestaurantIndex extends React.Component{
  constructor(props){
    super(props);
    // debugger
    this.state = {
      query: this.props.query,
      // updated: this.props.updated
    }
    this.prevUpdatedStatus = this.props.updated
    this.prevTime = this.props.time
  }

  componentDidMount(){
    // debugger
    this.props.requestRestaurants(this.state.query);
    // this.props.requestRestaurants(this.props.match.params.query);
  }

  // componentWillReceiveProps(props) {
  //   this.setState({ query: props.query })
  // }

  componentDidUpdate(prevProps, prevState){
    // debugger
    this.prevUpdatedStatus = prevProps.updated
    this.prevTime = prevProps.time
    if (this.props.updated !== prevProps.updated) {
      this.props.requestRestaurants(this.props.query)
        // .then(console.log(this.props.restaurants))
    }
    // debugger
  }

  render(){

    // debugger
    // if (this.props.restaurants.length===0) return null;
    if (this.props.restaurants.length===0) return (
      <div>
        <div>You searched for "{this.state.query}"</div>
        <h2>{this.props.restaurants.length} restaurants available</h2>
      </div>
    );
    // debugger
    let time;

    if (this.prevUpdatedStatus !== this.props.updated) {
      time=this.props.time
    } else {
      time=this.prevTime
    }
    
    const restaurantItems = this.props.restaurants.map((restaurant, i) => (
      <div className="restaurant-item-container" key={i}>
        <RestaurantIndexItem 
          key={restaurant.id} 
          restaurant={restaurant}
          time={time}
        />
        {/* <Times key={i+10000} time={time} restaurant={restaurant}/> */}
      </div>
      
    ))

    return(
      <div className="restaurant-list-container">
        <div className="restaurant-list-number">
          <div>You searched for "{this.state.query}"</div>
          <h2>{this.props.restaurants.length} restaurants available</h2>
        </div>
        <div className="restaurant-list">
          {restaurantItems}
        </div>
      </div>
    )
  }
}

export default RestaurantIndex;