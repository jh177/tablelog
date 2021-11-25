import { 
  RECEIVE_RESERVATIONS,
  RECEIVE_RESERVATION,
  REMOVE_RESERVATION
} from "../actions/reservation_actions";


const ReservationReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_RESERVATIONS:
      return action.reservations;
    case RECEIVE_RESERVATION:
      nextState[action.reservation.id] = action.reservation;
      return nextState;
    case REMOVE_RESERVATION:
      delete nextState[action.reservationId];
      return nextState;
    default:
      return state
  }
}

export default ReservationReducer
