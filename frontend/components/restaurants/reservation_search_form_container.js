import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import ReservationSearchForm from "./reservation_search_form";

const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id]
})

const mDTP = (dispatch) => ({
  openModal: modal => dispatch(openModal(modal))
})

export default connect(mSTP, mDTP)(ReservationSearchForm)