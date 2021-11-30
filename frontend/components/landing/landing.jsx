import React from "react";
import SearchBox from "../search/search_box";
import RestaurantIndexContainer from "../restaurants/restaurant_index_container";

class Landing extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
    <div className="landing-search-box-container">
      <SearchBox/>
    </div>
    )
  }
}

export default Landing;