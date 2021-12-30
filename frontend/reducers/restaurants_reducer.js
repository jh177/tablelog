import {
  RECEIVE_RESTAURANTS, 
  RECEIVE_RESTAURANT
} from "../actions/restaurant_actions";
import {
  RECEIVE_RESERVATION
} from "../actions/reservation_actions";
import { RECEIVE_USER } from "../actions/user_actions";
import { RECEIVE_REVIEW } from "../actions/review_actions";

// const RestaurantsReducer = (state={}, action) => {
const RestaurantsReducer = (state={ all: {}, single:{}}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  switch(action.type){
    case RECEIVE_RESTAURANTS:
      // return action.restaurants;
      nextState.single = {}
      nextState.all = action.restaurants
      return nextState
    case RECEIVE_RESTAURANT:
      // nextState = Object.assign({}, action.payload.restaurant);
      nextState.single = action.payload.restaurant;
      return nextState;
    case RECEIVE_RESERVATION:
      // nextState = Object.assign({}, action.payload.restaurant);
      nextState.single = action.payload.restaurant;
      return nextState;
    case RECEIVE_USER:
      // nextState = Object.assign({}, action.payload.restaurants);
      nextState.single = {}
      nextState.all = (action.payload.restaurants) ? action.payload.restaurants : {}
      return nextState;
    case RECEIVE_REVIEW:
      // nextState = Object.assign({}, action.payload.restaurant);
      nextState.single = action.payload.restaurant;
      return nextState;
    default:
      return state;
  }
}

export default RestaurantsReducer;