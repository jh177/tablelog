import { RECEIVE_RESERVATION_ERRORS, REMOVE_RESERVATION_ERRORS } from "../actions/reservation_actions";

const ReservationErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESERVATION_ERRORS:
      return action.errors;
    case REMOVE_RESERVATION_ERRORS:
      return [];
    default:
      return state;
  }
};

export default ReservationErrorsReducer;