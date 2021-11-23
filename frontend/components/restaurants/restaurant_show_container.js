import { connect } from "react-redux";
import { requestRestaurant } from "../../actions/restaurant_actions";
import RestaurantShow from "./restaurant_show";

const mSTP = (state, ownProps) => ({
  restaurant: state.restaurants[ownProps.match.params.restaurantId]
})

const mDTP = (dispatch) => ({
  requestrestaurant: (restaurantId) => dispatch(requestrestaurant(restaurantId))
})

export default connect(mSTP, mDTP)(RestaurantShow);