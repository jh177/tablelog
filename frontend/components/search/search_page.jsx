import React from "react";
import SearchPageSearchBox from "./search_page_search_box";
import RestaurantIndexContainer from "../restaurants/restaurant_index_container";

class SearchPage extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    // debugger

    return(
      <div>
        <SearchPageSearchBox/>
        <RestaurantIndexContainer/> 
      </div>
    )
  }
}

export default SearchPage;