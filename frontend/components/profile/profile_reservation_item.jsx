import React from "react";
import { Link } from "react-router-dom";

class ProfileReservationItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { reservation, restaurant, review} = this.props

    const reviewLink = (
      <Link to={`/feedback/${reservation.id}`}> Review</Link>
    )

    // debugger

    const reviewInfo = (review) ? (
      <div>
        {review.overall}
        <br />
        {review.body}
      </div>
      ) : null;

    return (
      <li>
        <h3>{restaurant.name}</h3>
        <h3>{reservation.date}</h3>
        <h3>{reservation.time}</h3>
        <h3>{reservation.party_size}</h3>
        <Link to={`/booking/modify/${reservation.id}`}>Modify</Link>
        <br />
        <Link to={`/booking/cancel/${reservation.id}`}>Cancel</Link>
        <br />
        {reviewLink}
        <br />
        <div>
          <div>Your review</div>
          <br />
          {reviewInfo}
        </div>
      </li>
    )
  }
}

export default ProfileReservationItem;