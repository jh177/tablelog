import React from "react";
import { Link } from "react-router-dom";
import {withRouter} from "react-router";

class ProfileReservationItem extends React.Component {
  constructor(props) {
    super(props)
    // this.state={
    //   deleted: 0
    // }
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick(reviewId){
  //   this.props.deleteReview(reviewId)
  //     .then(()=>this.setState({deleted: this.state.deleted+1}))
  // }


  render() {
    const { reservation, restaurant} = this.props

    const reviewLink = (!this.props.review && this.props.past) ?
      (<Link to={`/feedback/${reservation.id}`}> Review</Link>) : null

    // const pastReservations = ()

    // debugger
    
    const reviewInfo = (this.props.review) ? (
      <div>
        <div>Your review</div>
        <br />
        {this.props.review.overall}
        <br />
        {this.props.review.body}
        {/* <br />
        <button onClick={()=>this.handleClick(review.id)}>Delete Review</button> */}
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
          <br />
          {reviewInfo}
        </div>
      </li>
    )
  }
}

export default withRouter(ProfileReservationItem);