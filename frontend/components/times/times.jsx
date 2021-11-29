import React from "react";
import { timeSlots } from "../../util/reservation_util";
import { Link } from "react-router-dom";


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

    const options = times.map((time, i) => (
        <Link to={{
          pathname: `/booking/${this.props.restaurant.id}`,
          state: {
            restaurant: this.props.restaurant,
            date: localStorage.getItem("date"),
            time: time,
            partySize: localStorage.getItem("partySize")
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