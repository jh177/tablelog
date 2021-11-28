import { connect } from "react-redux";
import { requestRestaurant } from "../../actions/restaurant_actions";
import { requestReservation, updateReservation } from "../../actions/reservation_actions";
import ReservationFormEdit from "./reservation_form_edit";

const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  restaurant: Object.values(state.entities.restaurants)[0],
  reservation: state.entities.reservations[ownProps.match.params.reservationId]
})

const mDTP = (dispatch) => ({
  // requestRestaurant: (restaurantId) => dispatch(requestRestaurant(restaurantId)),
  requestReservation: (reservationId) => dispatch(requestReservation(reservationId)),
  updateReservation: (reservation) => dispatch(updateReservation(reservation))
})

export default connect(mSTP, mDTP)(ReservationFormEdit);