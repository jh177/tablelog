import React from "react";
import { Link } from "react-router-dom";

class Greeting extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const {currentUser, logout, openModal} = this.props


    const sessionLinks = () => (
      <nav className="login-signup">
        <button onClick={() => openModal('signup')} id="btn-sign-up">Sign up</button>
        <button onClick={() => openModal('login')} id="btn-sign-in">Sign in</button>
      </nav>
    )

    const personalGreeting = () => (
      <hgroup className="header-group">
        <h2 className="header-name">Welcome {currentUser.fname} {currentUser.lname}!</h2>
        <Link to="/profile">Profile</Link>
        <button className="header-button" onClick={logout}>Log Out</button>
      </hgroup>
    )

    return (
      currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
    )
    // const {currentUser, logout, openModal} = this.props
    // const display = currentUser ? (
    //   <div>
    //     <h1>Welcome {currentUser.fname} {currentUser.lname}!</h1>
    //     <button onClick={()=>logout()}>Log Out</button>
    //   </div>
    // ) : (
    //   <div>
    //     <Link to="/signup">Sign Up</Link>
    //     <br />
    //     <Link to="/login">Log In</Link>
    //   </div>
    // )

    // return (
    //   <div>
    //     {display}
    //   </div>
    // )
  }
}

export default Greeting;