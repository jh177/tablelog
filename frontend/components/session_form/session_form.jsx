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

  // renderErrors() {
  //   return (
  //     <ul>
  //       {this.props.errors.map((error, i) => (
  //         <li key={`error-${i}`}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }
  renderError(field){
    return this.props.errors.filter(error=>error.includes(field))
  }

  render() {
    const { formType, openModal, closeModal } = this.props
    const title = (formType === "signup") ? "Welcome to TableLog!" : "Please sign in"
    const btnText = (formType === "signup") ? "Create Account" : "Sign In"

    const nameInfo = (formType === "signup") ? (
      <div>
          <input
            type="text"
            placeholder="First Name *"
            value={this.state.fname}
            onChange={this.handleInput('fname')}
          />
          <li className="session-error">
            {this.renderError("Fname")}
          </li>
        <br />
          <input
            type="text"
            placeholder="Last Name *"
            value={this.state.lname}
            onChange={this.handleInput('lname')}
          />
          <li className="session-error">
            {this.renderError("Lname")}
          </li>
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
      <div className="modal-content">
        <div onClick={closeModal} className="close-x">X</div>
        <div className="session-form-container">
          <h3 className="session-form-title">{title}</h3>
          <form onSubmit={this.handleSubmit} className="session-form">
            <div>
              <br />
              <input
                type="email"
                placeholder="Enter email *"
                value={this.state.email}
                onChange={this.handleInput('email')}
              />
              <li className="session-error">
                {this.renderError("Email")}
              </li>
              <br />
              <input
                type="password"
                placeholder="Enter password *"
                value={this.state.password}
                onChange={this.handleInput('password')}
              />
              <li className="session-error">
                {this.renderError("Password")}
              </li>
              <li className="session-error">
                {this.renderError("Your")}
              </li>
              <br />
              {nameInfo}
              <br />
              {signupLink}
              <br />
              <input type="submit" value={btnText} />
            </div>
          </form>
          
            <input type="submit" value="Demo User" onClick={this.handleDemoLogin} />
        </div>
      </div>
    )
  }

}

export default SessionForm;