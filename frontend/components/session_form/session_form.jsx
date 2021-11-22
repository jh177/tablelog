import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      fname: "",
      lname: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value })
    }
  }

  render() {
    const { formType, otherForm, openModal, closeModal } = this.props
    const title = (formType === "signup") ? "Please sign up" : "Please sign in"
    
    const nameInfo = (formType === "signup") ? (
      <div>
        <label>First Name:
          <input
            type="text"
            value={this.state.fname}
            onChange={this.handleInput('fname')}
          />
        </label>
        <br />
        <label>Last Name:
          <input
            type="text"
            value={this.state.lname}
            onChange={this.handleInput('lname')}
          />
        </label>
        <br />
      </div>) : null;

    const signupLink = (formType === "login") ? (
      <div>
        <span>New to TableLog?</span>
        <div onClick={openModal} className="link-create-account">
          Create an account
        </div>
      </div>
    ) : null;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div onClick={closeModal} className="close-x">X</div>
          {title}
          <br />
          <br />
          <label>Email:
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleInput('email')}
            />
          </label>
          <br />
          <label>Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
            />
          </label>
          <br />
          {nameInfo}
          <br />
          {signupLink}
          <br />
          <button>Submit</button>
        </form>
      </div>
    )
  }

}

export default SessionForm;