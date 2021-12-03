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
    const noiseLevels = ["Do not recall", "Quiet", "Moderate", "Energetic"]
    return noiseLevels[Math.round(noise) - 1]
  }

  render() {
    const { reservation, restaurant} = this.props

    const reviewLink = (!this.props.review && this.props.past) ?
      (<Link to={`/feedback/${reservation.id}`}>Write Review</Link>) : null

    const viewLink = (!this.props.past) ?
      (<Link to={`/booking/view/${reservation.id}`}>View</Link>) : null

    const modifyLink = (!this.props.past) ?
      (<Link to={`/booking/modify/${reservation.id}`}>Modify</Link>) : null
    // debugger

    const cancelLink = (!this.props.past) ?
      (<Link to={`/booking/cancel/${reservation.id}`}>Cancel</Link>) : null

    
    const reviewInfo = (this.props.review) ? (
      <div>
        <div>
          <div>
            <p>On {new Date(this.props.review.created_at).toString().slice(0, 15)} you wrote </p>
          </div>
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
            {this.noiseLevel(this.props.review.noise)}
          </div>

          <div>
            <p>Comments</p>
            {this.props.review.body}
          </div>
        </div>
      </div>
      ) : null;
      
      // debugger

    return (
      <div>
        <h3>{restaurant.name}</h3>
        <h3>{reservation.date}</h3>
        <h3>{reservation.time}</h3>
        <h3>{reservation.party_size}</h3>
        {viewLink}
        {modifyLink}
        {cancelLink}
        {reviewLink}
        <div>
          {reviewInfo}
        </div>
      </div>
    )
  }
}

export default withRouter(ProfileReservationItem);