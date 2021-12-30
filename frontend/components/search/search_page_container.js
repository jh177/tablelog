import { connect } from "react-redux";
import { requestRestaurants } from "../../actions/restaurant_actions";
import SearchPage from "./search_page";
import { withRouter } from "react-router";


const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  restaurants: state.entities.restaurants.all,
  queryTerm: ownProps.match.params.query
})

const mDTP = (dispatch) => ({
  requestRestaurants: (query) => dispatch(requestRestaurants(query)),
})

export default withRouter(connect(mSTP, mDTP)(SearchPage));