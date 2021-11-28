import {
  RECEIVE_RESTAURANTS, 
  RECEIVE_RESTAURANT
} from "../actions/restaurant_actions";
import {
  RECEIVE_RESERVATION
} from "../actions/reservation_actions"

const RestaurantsReducer = (state={}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  switch(action.type){
    case RECEIVE_RESTAURANTS:
      return action.restaurants;
    case RECEIVE_RESTAURANT:
      nextState[action.restaurant.id] = action.restaurant;
      return nextState;
    case RECEIVE_RESERVATION:
      nextState = Object.assign({}, action.payload.restaurant);
      return nextState;
    default:
      return state;
  }
}

export default RestaurantsReducer;