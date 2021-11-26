import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Redirect } from 'react-router-dom'


const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) =>(
      !loggedIn ? (<Component {...props} />) : (<Redirect to="/" />)
      )}
  />
);

const Protected = ({component:Component, path, loggedIn, exact}) => (
  <Route path={path} exact={exact} render={(props)=>(
      loggedIn ? (<Component {...props} />) : (<Redirect to="/" />)
      )}
  />
)

// const UserSpecific = ({ component: Component, path, loggedIn, exact }) => (
//   <Route path={path} exact={exact} render={(props) => (
//     loggedIn ? (<Component {...props} />) : (<Redirect to="/" />)
//   )}
//   />
// )

const mSTP = (state) => ({
  loggedIn: Boolean(state.session.id)
  // currentUser: state.entities.users[state.session.id],
})

export const AuthRoute = withRouter(connect(mSTP,null)(Auth));

export const ProtectedRoute = withRouter(connect(mSTP, null)(Protected));

// export const UserSpecificRoute = withRouter(connect(mSTP, null)(Protected));

