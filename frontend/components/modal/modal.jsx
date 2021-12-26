import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import LoginFormContainer from "../session_form/login_form_container";
import SignupFormContainer from "../session_form/signup_form_container";
import SearchBoxModalContainer from "../search/search_box_modal_container";
import RestaurantImageModalContainer from "../restaurants/restaurant_image_modal_container";

const Modal = ({modal, closeModal}) => {
  if (!modal){
    return null;
  }
  let component;
  switch (modal){
    case "login":
      component = <LoginFormContainer/>;
      break;
    case "signup":
      component = <SignupFormContainer/>;
      break;
    case "search":
      component = <SearchBoxModalContainer/>;
      break;
    case "image":
      component = <RestaurantImageModalContainer/>;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);