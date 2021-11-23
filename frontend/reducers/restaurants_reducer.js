import {
  RECEIVE_RESTAURANTS, 
  RECEIVE_RESTAURANT
} from "../actions/restaurant_actions"

const RestaurantsReducer = (state={}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  switch(action.type){
    case RECEIVE_RESTAURANTS:
      return action.restaurants;
    case RECEIVE_RESTAURANT:
      nextState[action.restaurant.id] = action.restaurant;
    default:
      return state;
  }
}

export default RestaurantsReducer;