import React from "react";
import { Link } from "react-router-dom";

class ProfileReservationItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(reviewId){
    this.props.deleteReview(reviewId)
  }


  render() {
    const { reservation, restaurant, review} = this.props

    const reviewLink = (
      <Link to={`/feedback/${reservation.id}`}> Review</Link>
    )

    
    const reviewInfo = (review) ? (
      <div>
        {review.overall}
        <br />
        {review.body}
        <br />
        <button onClick={()=>this.handleClick(review.id)}>Delete Review</button>
      </div>
      ) : null;
      
      // debugger

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