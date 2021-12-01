import { 
  RECEIVE_RESERVATIONS,
  RECEIVE_RESERVATION,
  REMOVE_RESERVATION
} from "../actions/reservation_actions";
import { RECEIVE_USER } from "../actions/user_actions";


const ReservationReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_RESERVATIONS:
      return action.reservations;
    case RECEIVE_RESERVATION:
      nextState = Object.assign({}, action.payload.reservation)
      return nextState;
    case REMOVE_RESERVATION:
      delete nextState[action.reservationId];
      return nextState;
    case RECEIVE_USER:
      nextState = Object.assign({}, action.payload.reservations);
      return nextState;
    default:
      return state
  }
}

export default ReservationReducer
