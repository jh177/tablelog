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
    this.props.processForm(user);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value })
    }
  }

  render() {
    const { formType, link } = this.props
    const title = (formType === "signup") ? "Sign Up" : "Log in"
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

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {title}
          <br />
          {link}
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
          <button>Submit</button>
        </form>
      </div>
    )
  }

}

export default SessionForm;