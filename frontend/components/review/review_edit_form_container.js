import { connect } from "react-redux";
import { requestUser } from "../../actions/user_actions";
import { requestReservation } from "../../actions/reservation_actions";
import { requestRestaurant } from "../../actions/restaurant_actions";
import { requestReview, updateReview, removeReviewErrors, deleteReview } from "../../actions/review_actions"
import ReviewEditForm from "./review_edit_form";

const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  review: Object.values(state.entities.reviews)[0],
  // reservation: Object.values(state.entities.reservations)[0],
  reservation: Object.values(state.entities.reservations.single)[0],
  restaurant: Object.values(state.entities.restaurants.single)[0],
  errors: state.errors.review
})


const mDTP = (dispatch) => ({
  requestUser: (userId) => dispatch(requestUser(userId)),
  requestReview: (reviewId) => dispatch(requestReview(reviewId)),
  updateReview: (review) => dispatch(updateReview(review)),
  removeReviewErrors: () => dispatch(removeReviewErrors()),
  deleteReview: (reviewId) => dispatch(deleteReview(reviewId))
})

export default connect(mSTP, mDTP)(ReviewEditForm);