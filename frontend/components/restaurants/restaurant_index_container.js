import { connect } from "react-redux";
import { requestRestaurants } from "../../actions/restaurant_actions";
import RestaurantIndex from "./restaurant_index";

const mSTP = (state) => ({
  restaurants: Object.values(state.entities.restaurants)
})

const mDTP = (dispatch) => ({
  requestRestaurants: ()=>dispatch(requestRestaurants())
})

export default connect(mSTP, mDTP)(RestaurantIndex);