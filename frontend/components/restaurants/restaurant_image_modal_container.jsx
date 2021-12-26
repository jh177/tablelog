import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import RestaurantImageModal from "./restaurant_image_modal"

const mDTP = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
})

export default connect(null, mDTP)(RestaurantImageModal);