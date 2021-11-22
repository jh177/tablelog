import { connect } from "react-redux";
import SessionForm from "./session_form";
import { login } from "../../actions/session_actions"
import { Link } from "react-router-dom";
import React from "react";
import { openModal, closeModal } from "../../actions/modal_actions";


const mapStateToProps = (state) => ({
  errors: state.errors.session,
  formType: "login",
  link: < Link to="/signup">Sign up link</Link >
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(login(user)),
  otherForm: (
    <button onClick={()=>dispatch(openModal("signup"))}>
      Signup
    </button>),
    closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)