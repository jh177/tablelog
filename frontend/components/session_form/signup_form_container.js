import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signup, login } from "../../actions/session_actions"
import { Link } from "react-router-dom";
import React from "react";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state) => ({
  errors: state.errors.session,
  formType: "signup",
  // link: < Link to="/login">Log in link</Link >
})

const demoUser = { email: "demo@tablelog.com", password: "123456" }

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
  // otherForm: (
  //   <button onClick={() => dispatch(openModal("login"))}>
  //     Login
  //   </button>),
  closeModal: () => dispatch(closeModal()),
  demoLogin: () => dispatch(login(demoUser))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)