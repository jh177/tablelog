import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDemoLogin = this.handleDemoLogin.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  handleDemoLogin(e) {
    e.preventDefault();
    this.props.demoLogin().then(this.props.closeModal);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value })
    }
  }

  renderError(field) {
    return this.props.errors.filter(error => error.includes(field))
  }

  render() {
    const { openModal, closeModal } = this.props

    return (
      <div className="modal-content">
        <div onClick={closeModal} className="close-x">X</div>
        <div className="login-form-container">
          <h3 className="login-form-title">Please sign in</h3>
          <form onSubmit={this.handleSubmit} className="login-form">
            <div>
              <input
                type="email"
                placeholder="Enter email *"
                value={this.state.email}
                onChange={this.handleInput('email')}
              />
              <li className="login-error">
                {this.renderError("Email")}
              </li>
              <input
                type="password"
                placeholder="Enter password *"
                value={this.state.password}
                onChange={this.handleInput('password')}
              />
              <li className="login-error">
                {this.renderError("Your")}
              </li>
              
              <input type="submit" value="Sign In" id="log-in-btn"/>
            </div>
          </form>
          <div className="demo-user-link">
            <h3>Don't want to complete the form?</h3>
            <input type="submit" value="Continue with Demo User" onClick={this.handleDemoLogin} id="demo-user-btn"/>
          </div>
          <div id="signup-link">
            <span>New to TableLog?</span>&nbsp;
            <span onClick={openModal} className="link-create-account">
               Create an account
            </span>
          </div>
        </div>
      </div>
    )
  }

}

export default LoginForm;