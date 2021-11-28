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
  reservation: state.entities.reservations[ownProps.match.params.reservationId],
  restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
  currentUser: state.entities.users[state.session.id]
})

const mDTP = (dispatch) => ({
  requestRestaurant: (restaurantId) => dispatch(requestRestaurant(restaurantId)),
  requestReservation: (reservationId) => dispatch(requestReservation(reservationId))
})

export default connect(mSTP, mDTP)(ReservationShow);