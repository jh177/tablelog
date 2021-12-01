import { 
  RECEIVE_REVIEWS,
  RECEIVE_REVIEW,
  REMOVE_REVIEW
} from "../actions/review_actions";
import { RECEIVE_RESTAURANT } from "../actions/restaurant_actions";
import { RECEIVE_RESERVATION } from "../actions/reservation_actions";


const ReviewReducer = (state={}, action) =>{
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return action.reviews;
    case RECEIVE_REVIEW:
      nextState[action.review.id] = action.review
      return nextState;
    case REMOVE_REVIEW:
      delete nextState[action.reviewId];
      return nextState;
    case RECEIVE_RESTAURANT:
      nextState = Object.assign({}, action.payload.reviews);
      return nextState;
    case RECEIVE_RESERVATION:
      nextState = Object.assign({}, action.payload.review);
      return nextState;
    default:
      return state
  }
}

export default ReviewReducer;
