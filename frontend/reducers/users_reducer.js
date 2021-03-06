import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER } from "../actions/user_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      // debugger
      return action.payload.user
    case RECEIVE_USER:
      // debugger
      return Object.assign({}, action.payload.user)
    default:
      return state;
  }
};

export default usersReducer;