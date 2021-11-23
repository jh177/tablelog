import { connect } from "react-redux";
// import SessionForm from "./session_form";
import { login, receiveErrors } from "../../actions/session_actions"
import { Link } from "react-router-dom";
import React from "react";
import { openModal, closeModal } from "../../actions/modal_actions";
import LoginForm from "./login_form";


const mapStateToProps = (state) => ({
  errors: state.errors.session,
  // formType: "login",
})

const demoUser = {email: "demo@tablelog.com", password: "123456"}

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  closeModal: () => dispatch(closeModal()),
  openModal: () => dispatch(openModal("signup")),
  demoLogin: () => dispatch(login(demoUser)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)