import { connect } from "react-redux";
import { requestRestaurant } from "../../actions/restaurant_actions";
import { 
  requestReservation, 
  requestReservations,
  createReservation,
  updateReservation,
  deleteReservation
} from "../../actions/reservation_actions";
import ReservationShow from "./reservation_show";

const mSTP = (state, ownProps) => ({
  // reservation: state.entities.reservations[ownProps.match.params.reservationId],
  reservation: Object.values(state.entities.reservations.single)[0],
  restaurant: Object.values(state.entities.restaurants.single)[0],
  currentUser: state.entities.users[state.session.id]
})

const mDTP = (dispatch) => ({
  requestReservation: (reservationId) => dispatch(requestReservation(reservationId))
})

export default connect(mSTP, mDTP)(ReservationShow);