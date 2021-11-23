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
    this.handleDemoLogin = this.handleDemoLogin.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    console.log(user)
    this.props.processForm(user).then(this.props.closeModal);
  }

  handleDemoLogin(e){
    e.preventDefault();
    this.props.demoLogin().then(this.props.closeModal);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value })
    }
  }

  renderErrors() {
    // console.log(this.props.errors)
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { formType, otherForm, openModal, closeModal } = this.props
    const title = (formType === "signup") ? "Welcome to TableLog!" : "Please sign in"
    const btnText = (formType === "signup") ? "Create Account" : "Sign In"

    const nameInfo = (formType === "signup") ? (
      <div>
        {/* <label>First Name: */}
          <input
            type="text"
            placeholder="First Name *"
            value={this.state.fname}
            onChange={this.handleInput('fname')}
          />
        {/* </label> */}
        <br />
        {/* <label>Last Name: */}
          <input
            type="text"
            placeholder="Last Name *"
            value={this.state.lname}
            onChange={this.handleInput('lname')}
          />
        {/* </label> */}
        <br />
      </div>) : null;

    const signupLink = (formType === "login") ? (
      <div>
        <h4>New to TableLog?</h4>
        <div onClick={openModal} className="link-create-account">
          Create an account
        </div>
      </div>
    ) : null;

    return (
      <div className="session-form-container">
        <div onClick={closeModal} className="close-x">X</div>
        <div className="session-form">
          <form onSubmit={this.handleSubmit} className="session-form">
            <h3 className="session-form-title">{title}</h3>
            <br />
            {this.renderErrors()}
            <div>
              <br />
              {/* <label>Email: */}
              <input
                type="email"
                placeholder="Enter email *"
                value={this.state.email}
                onChange={this.handleInput('email')}
              />
              {/* </label> */}
              <br />
              {/* <label>Password: */}
              <input
                type="password"
                placeholder="Enter password *"
                value={this.state.password}
                onChange={this.handleInput('password')}
              />
              {/* </label> */}
              <br />
              {nameInfo}
              <br />
              {signupLink}
              <br />
              <input type="submit" value={btnText} />
            </div>

            <input type="submit" value="Demo User" onClick={this.handleDemoLogin} />

          </form>
        </div>
      </div>
    )
  }

}

export default SessionForm;