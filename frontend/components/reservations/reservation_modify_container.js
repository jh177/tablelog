import { connect } from "react-redux";
import ReservationModify from "./reservation_modify";
import { requestRestaurant } from "../../actions/restaurant_actions";
import { requestReservation, updateReservation } from "../../actions/reservation_actions";


const mSTP = (state, ownProps) => ({
  reservation: state.entities.reservations[ownProps.match.params.reservationId],
  restaurant: Object.values(state.entities.restaurants)[0],
  currentUser: state.entities.users[state.session.id]
})

const mDTP = (dispatch) => ({
  // requestRestaurant: (restaurantId) => dispatch(requestRestaurant(restaurantId)),
  requestReservation: (reservationId) => dispatch(requestReservation(reservationId)),
  updateReservation: (reservation) => dispatch(updateReservation(reservation))
})

export default connect(mSTP, mDTP)(ReservationModify);