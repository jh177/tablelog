import { connect } from "react-redux";
import { requestRestaurants } from "../../actions/restaurant_actions";
import LandingRestaurantList from "./landing_restaurant_list"

const mSTP = (state) => ({
  restaurants: Object.values(state.entities.restaurants)
})

const mDTP = (dispatch) => ({
  requestRestaurants: (searchTerm) => dispatch(requestRestaurants(searchTerm))
})

export default connect(mSTP, mDTP)(LandingRestaurantList);