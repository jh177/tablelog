import { connect } from "react-redux";
import ReservationForm from "./reservation_form";
import { 
  createReservation,
  updateReservation, 
  deleteReservation
} from "../../actions/reservation_actions";
import { requestRestaurant } from "../../actions/restaurant_actions";

const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  restaurant: state.entities.restaurants[ownProps.match.params.restaurantId]
})

const mDTP = (dispatch) => ({
  requestRestaurant: (restaurantId) => dispatch(requestRestaurant(restaurantId)),
  createReservation: (reservation) => dispatch(createReservation(reservation)),
  updateReservation: (reservation) => dispatch(updateReservation(reservation)),
  deleteReservation: (reservationId) => dispatch(deleteReservation(reservationId)),
})

export default connect(mSTP, mDTP)(ReservationForm);