import React from "react";
import { timeSlots } from "../../util/reservation_util";
import { Link } from "react-router-dom";
import {todayDate} from "../../util/reservation_util"

class Times extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let index = timeSlots.indexOf(this.props.time);
    let times = [];
    for (let i = 0; i <= 2; i++) {
      times.push(timeSlots[(index + i) % 48])
    }
    
    // debugger
    const defaultDate = (localStorage.date.length > 0) ? localStorage.getItem("date") : todayDate
    const defaultSize = (localStorage.partySize !== "0") ? parseInt(localStorage.getItem("partySize")) : 2

    const options = times.map((time, i) => (
        <Link to={{
          pathname: `/booking/${this.props.restaurant.id}`,
          state: {
            restaurant: this.props.restaurant,
            date: defaultDate,
            time: time,
            partySize: defaultSize
          }
        }} key={i}>{time}</Link>
      )
    )

    return(
      <ul>
        {options}
      </ul>
    )
  }
}


export default Times;