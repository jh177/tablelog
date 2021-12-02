import React from "react";
import SearchBox from "../search/search_box";
import LandingRestaurantListContainer from "../restaurants/landing_restaurant_list_container";
import LandingRestaurantList from "../restaurants/landing_restaurant_list";

class Landing extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
    <div>
      <div className="landing-search-box-container">
        <SearchBox />
      </div>
      <div className="landing-list-container">
        <div className="landing-list-title">
          <h2>Explore Los Angeles</h2>
        </div>
        <LandingRestaurantListContainer/>
      </div>
    </div>

    )
  }
}

export default Landing;