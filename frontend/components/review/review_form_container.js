import { connect } from "react-redux";
import ReviewForm from "./review_form";
import { requestUser } from "../../actions/user_actions";
import { requestReservation } from "../../actions/reservation_actions";
import { requestRestaurant } from "../../actions/restaurant_actions";
import {createReview} from "../../actions/review_actions"


const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  reservation: state.entities.reservations[ownProps.match.params.reservationId],
  restaurant: Object.values(state.entities.restaurants)[0],
  review: Object.values(state.entities.reviews)[0]
})


const mDTP = (dispatch) => ({
  requestUser: (userId) => dispatch(requestUser(userId)),
  requestReservation: (reservationId) => dispatch(requestReservation(reservationId)),
  requestRestaurant: (restaurantId) => dispatch(requestRestaurant(restaurantId)),
  createReview: (review) => dispatch(createReview(review))
})

export default connect(mSTP, mDTP)(ReviewForm);