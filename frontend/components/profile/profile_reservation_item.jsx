import React from "react";
import { Link } from "react-router-dom";
import {withRouter} from "react-router";
import { FaStar, FaUtensils, FaRegStar, FaRegCommentAlt, FaVolumeDown } from "react-icons/fa";


class ProfileReservationItem extends React.Component {
  constructor(props) {
    super(props)
    // this.state={
    //   deleted: 0
    // }
    // this.handleClick = this.handleClick.bind(this);
  }

  displayRatings(rating) {

    const starWidth = rating * 16;
    return (
      <div className="restaurant-show-stars">
        <div className="stars-outer">
          <FaRegStar color={"#e4e5e9"} size={16} />
          <FaRegStar color={"#e4e5e9"} size={16} />
          <FaRegStar color={"#e4e5e9"} size={16} />
          <FaRegStar color={"#e4e5e9"} size={16} />
          <FaRegStar color={"#e4e5e9"} size={16} />

          <div className="stars-inner" style={{ width: `${starWidth}px` }}>
            <FaStar color={"#fdb245"} size={16} />
            <FaStar color={"#fdb245"} size={16} />
            <FaStar color={"#fdb245"} size={16} />
            <FaStar color={"#fdb245"} size={16} />
            <FaStar color={"#fdb245"} size={16} />
          </div>
        </div >
      </div>
    )
  }

  noiseLevel(noise) {
    const noiseLevels = ["Quiet", "Moderate", "Energetic", "Too Loud"]
    return noiseLevels[Math.round(noise) - 1]
  }

  render() {
    const { reservation, restaurant} = this.props

    let reviewLink;
    if (!this.props.review && this.props.past) {
      reviewLink = (<Link to={`/feedback/${reservation.id}`}>Write Review</Link>);
    } else if (this.props.review && this.props.past) {
      reviewLink = (<Link to={`/feedback/edit/${this.props.review.id}`}>Edit Review</Link>);
    } else {
      reviewLink = null;
    }

    const viewLink = (!this.props.past) ?
      (<Link to={`/booking/view/${reservation.id}`}>View</Link>) : null

    const modifyLink = (!this.props.past) ?
      (<Link to={`/booking/modify/${reservation.id}`}>Modify</Link>) : null
    // debugger

    const cancelLink = (!this.props.past) ?
      (<Link to={`/booking/cancel/${reservation.id}`}>Cancel</Link>) : null

    
    const reviewInfo = (this.props.review) ? (
      <div className="profile-reservation-review-container">
        <div className="profile-reservation-review">
          <div className="profile-reservation-review-1">
            <p>On {new Date(this.props.review.created_at).toString().slice(4, 15)} you wrote </p>
          </div>
          <div className="profile-reservation-review-2">
            <div>
              <p>Overall</p>
              {this.displayRatings(this.props.review.overall)}
            </div>
            <div>
              <p>Food</p>
              {this.displayRatings(this.props.review.food)}
            </div>
            <div>
              <p>Service</p>
              {this.displayRatings(this.props.review.service)}
            </div>
          </div>
          <div className="profile-reservation-review-3">
            <div>
              <p>Ambience</p>
              {this.displayRatings(this.props.review.ambience)}
            </div>
            <div>
              <p>Value</p>
              {this.displayRatings(this.props.review.value)}
            </div>
            <div>
              <p>Noise Level</p>
              <p>{this.noiseLevel(this.props.review.noise)}</p>
            </div>
          </div>

          <div className="profile-reservation-review-4">
            <p>Comments:</p>
            <p>{this.props.review.body}</p>
          </div>
        </div>
      </div>
      ) : null;
      
      // debugger
    let dateInfo = reservation.date.split("-")
    // let dayInfo = new Date(dateInfo[0], dateInfo[1] - 1, dateInfo[2]).toString().slice(0, 3);
    let displayDate = dateInfo[1] + "/" + dateInfo[2] + "/" + dateInfo[0];

    return (
      <div className="profile-reservation-details">
        <div className="profile-reservation-image">
          <img src={restaurant.photoUrl} alt="restaurant-image" />
        </div>
        <div className="profile-reservation-right">
          <div className="profile-reservation-name">
            <Link to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link>
          </div>
          <div className="profile-reservation-date">
            <p>{displayDate} at {reservation.time}</p>
          </div>
          <div className="profile-reservation-size">
            <p>Table for {reservation.party_size}</p>
          </div>
          <div className="profile-reservation-action-links">
            {viewLink}
            {modifyLink}
            {cancelLink}
            {reviewLink}
          </div>
          <div className="profile-reservation-review-info">
            {reviewInfo}
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(ProfileReservationItem);