import { connect } from "react-redux";
import { requestRestaurants } from "../../actions/restaurant_actions";
import SearchPage from "./search_page";

const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  restaurants: state.entities.restaurants,
})

const mDTP = (dispatch) => ({
  requestRestaurants: (searchTerm) => dispatch(requestRestaurants(searchTerm)),
})

export default connect(mSTP, mDTP)(SearchPage);