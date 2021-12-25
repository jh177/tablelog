import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import SearchBoxModal from "./search_box_modal"

const mDTP = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
})

export default connect(null, mDTP)(SearchBoxModal);