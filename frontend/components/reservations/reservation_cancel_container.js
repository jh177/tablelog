import { connect } from "react-redux";
import { deleteReservation, requestReservation } from "../../actions/reservation_actions";
import { requestRestaurant } from "../../actions/restaurant_actions";
import ReservationCancel from "./reservation_cancel";



const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
  reservation: state.entities.reservations[ownProps.match.params.reservationId]
})

const mDTP = (dispatch) => ({
  requestRestaurant: (restaurantId) => dispatch(requestRestaurant(restaurantId)),
  requestReservation: (reservationId) => dispatch(requestReservation(reservationId)),
  deleteReservation: (reservationId) => dispatch(deleteReservation(reservationId))
})

export default connect(mSTP, mDTP)(ReservationCancel);