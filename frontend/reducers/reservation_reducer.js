import { 
  RECEIVE_RESERVATIONS,
  RECEIVE_RESERVATION,
  REMOVE_RESERVATION
} from "../actions/reservation_actions";
import { RECEIVE_USER } from "../actions/user_actions";
import { RECEIVE_REVIEW } from "../actions/review_actions";


const ReservationReducer = (state = { all: {}, single: {}}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_RESERVATIONS:
      // return action.reservations;
      nextState.single = {}
      nextState.all = action.restaurants
      return nextState;
    case RECEIVE_RESERVATION:
      // nextState = Object.assign({}, action.payload.reservation)
      nextState.single = action.payload.reservation;
      return nextState;
    case REMOVE_RESERVATION:
      // delete nextState[action.reservationId];
      nextState.single = {};
      return nextState;
    case RECEIVE_USER:
      // nextState = Object.assign({}, action.payload.reservations);
      nextState.single = {}
      nextState.all = (action.payload.reservations) ? action.payload.reservations : {}
      return nextState;
    case RECEIVE_REVIEW:
      // nextState = Object.assign({}, action.payload.reservation);
      nextState.single = action.payload.reservation;
      return nextState;
    default:
      return state
  }
}

export default ReservationReducer
