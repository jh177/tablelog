import { connect } from "react-redux";
import { requestRestaurant } from "../../actions/restaurant_actions";
import RestaurantShow from "./restaurant_show";
import { openModal } from "../../actions/modal_actions";

const mSTP = (state, ownProps) => ({
  restaurant: state.entities.restaurants[ownProps.match.params.restaurantId],
  reviews: Object.values(state.entities.reviews)
})

const mDTP = (dispatch) => ({
  requestRestaurant: (restaurantId) => dispatch(requestRestaurant(restaurantId)),
  openModal: modal => dispatch(openModal(modal))
})

export default connect(mSTP, mDTP)(RestaurantShow);