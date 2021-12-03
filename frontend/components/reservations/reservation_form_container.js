import { connect } from "react-redux";
import ReservationForm from "./reservation_form";
import { 
  createReservation,
  updateReservation, 
  deleteReservation,
  removeReservationErrors
} from "../../actions/reservation_actions";
import { requestRestaurant } from "../../actions/restaurant_actions";
import errorsReducer from "../../reducers/errors_reducer";

const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
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