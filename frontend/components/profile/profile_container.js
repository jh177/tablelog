import { connect } from "react-redux";
import Profile from "./profile";
import { requestReservations } from "../../actions/reservation_actions";
import { requestRestaurants } from "../../actions/restaurant_actions";

const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  reservations: Object.values(state.entities.reservations),
  restaurants: Object.values(state.entities.restaurants)
})

const mDTP = (dispatch) => ({
  requestReservations: ()=>dispatch(requestReservations()),
  requestRestaurants: () => dispatch(requestRestaurants())
})

export default connect(mSTP, mDTP)(Profile)