import { combineReducers } from "redux";
import ReservationReducer from "./reservation_reducer";
import RestaurantsReducer from "./restaurants_reducer";
import ReviewReducer from "./review_reducer";
import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  restaurants: RestaurantsReducer,
  reservations: ReservationReducer,
  reviews: ReviewReducer
})

export default entitiesReducer;