import { RECEIVE_REVIEW_ERRORS, REMOVE_REVIEW_ERRORS } from "../actions/review_actions";

const ReviewErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REVIEW_ERRORS:
      return action.errors;
    case REMOVE_REVIEW_ERRORS:
      return [];
    default:
      return state;
  }
};

export default ReviewErrorsReducer;