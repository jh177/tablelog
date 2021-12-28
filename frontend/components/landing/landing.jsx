import React from "react";
import SearchBox from "../search/search_box";
import LandingRestaurantListContainer from "../restaurants/landing_restaurant_list_container";
import LandingRestaurantList from "../restaurants/landing_restaurant_list";
import LandingExploreCards from "./landing_explore_cards";

class Landing extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    // debugger
    return(
    <div className="landing-wrapper">
      <div className="landing-search-box-container">
        <SearchBox />
      </div>
      <div className="landing-list-container">
        <div className="landing-list-main">
          <div className="landing-list-title">
            <h2>Explore Los Angeles</h2>
          </div>
          <LandingRestaurantListContainer />
        </div>
        <div className="landing-cards">
          <div className="landing-cards-title">
            <h2>Top Cuisines in Los Angeles</h2>
          </div>
            <LandingExploreCards/>
        </div>
      </div>
    </div>

    )
  }
}

export default Landing;