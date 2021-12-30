import { connect } from "react-redux";
import ReservationForm from "./reservation_form";
import { 
  createReservation,
  updateReservation, 
  deleteReservation,
  removeReservationErrors
} from "../../actions/reservation_actions";
import { requestRestaurant } from "../../actions/restaurant_actions";

const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  restaurant: Object.values(state.entities.restaurants.single)[0],
  errors: state.errors.reservation
})

const mDTP = (dispatch) => ({
  requestRestaurant: (restaurantId) => dispatch(requestRestaurant(restaurantId)),
  createReservation: (reservation) => dispatch(createReservation(reservation)),
  updateReservation: (reservation) => dispatch(updateReservation(reservation)),
  deleteReservation: (reservationId) => dispatch(deleteReservation(reservationId)),
  removeReservationErrors: ()=> dispatch(removeReservationErrors())
})

export default connect(mSTP, mDTP)(ReservationForm);