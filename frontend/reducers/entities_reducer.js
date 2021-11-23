import { combineReducers } from "redux";
import RestaurantsReducer from "./restaurants_reducer";
import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  restaurants: RestaurantsReducer
})

export default entitiesReducer;