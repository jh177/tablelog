import { connect } from "react-redux";
import Profile from "./profile";
import { requestReservations } from "../../actions/reservation_actions";
import { requestRestaurants } from "../../actions/restaurant_actions";
import { requestUser } from "../../actions/user_actions";
import { deleteReview } from "../../actions/review_actions";

const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  reservations: Object.values(state.entities.reservations.all),
  restaurants: Object.values(state.entities.restaurants.all),
  reviews: Object.values(state.entities.reviews)
})

const mDTP = (dispatch) => ({
  requestUser: (userId) => dispatch(requestUser(userId)),
  requestReservations: ()=>dispatch(requestReservations()),
  requestRestaurants: () => dispatch(requestRestaurants()),
  deleteReview: (reviewId) => dispatch(deleteReview(reviewId))
})

export default connect(mSTP, mDTP)(Profile)