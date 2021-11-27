import React from "react";
import { Link } from "react-router-dom";

class ProfileReservationItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { reservation, restaurant} = this.props
    return (
      <li>
        <h3>{restaurant.name}</h3>
        <h3>{reservation.date}</h3>
        <h3>{reservation.time}</h3>
        <h3>{reservation.party_size}</h3>
      </li>
    )
  }
}

export default ProfileReservationItem;