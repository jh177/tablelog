import React from "react";
import SearchBox from "./search_box";

class SearchPage extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    return(
      <div>
        <SearchBox/>
        list of restaurants     
      </div>
    )
  }
}

export default SearchPage;