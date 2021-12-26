import React from "react";

class SignupForm extends React.Component {
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

  componentWillUnmount() {
    this.props.removeErrors();
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
    let errorMessage = this.props.errors.filter(error => error.includes(field))
    if (errorMessage.length > 0) {
      return errorMessage[0].split(" ").slice(1).join(" ")
    }
  }

  render() {
    const {openModal, closeModal } = this.props

    return (
      <div className="modal-content-wrapper">
        <div className="modal-content">
          <div onClick={closeModal} className="close-x">X</div>
          <div className="signup-form-container">
            <h3 className="signup-form-title">Welcome to TableLog!</h3>
            <form onSubmit={this.handleSubmit} className="signup-form">
              <div>
                <input
                  type="text"
                  placeholder="First Name *"
                  value={this.state.fname}
                  onChange={this.handleInput('fname')}
                />
                <li className="signup-error">
                  {this.renderError("Fname")}
                </li>
                <input
                  type="text"
                  placeholder="Last Name *"
                  value={this.state.lname}
                  onChange={this.handleInput('lname')}
                />
                <li className="signup-error">
                  {this.renderError("Lname")}
                </li>
                <input
                  type="email"
                  placeholder="Enter email *"
                  value={this.state.email}
                  onChange={this.handleInput('email')}
                />
                <li className="signup-error">
                  {this.renderError("Email")}
                </li>
                <input
                  type="password"
                  placeholder="Enter password *"
                  value={this.state.password}
                  onChange={this.handleInput('password')}
                />
                <li className="signup-error">
                  {this.renderError("Password")}
                </li>
                <input type="submit" value="Create Account" id="signup-btn"/>
              </div>
            </form>

            <div className="demo-user-link">
              <h3>Don't want to complete the form?</h3>
              <input type="submit" value="Continue with Demo User" onClick={this.handleDemoLogin} id="demo-user-btn"/>
            </div>        
          </div>
        </div>
      </div>
    )
  }

}

export default SignupForm;