import * as SessionApiUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const REMOVE_SESSION_ERRORS = 'REMOVE_SESSION_ERRORS';

const receiveCurrentUser = payload => ({
  type: RECEIVE_CURRENT_USER,
  payload,
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
})

export const removeErrors = () => ({
  type: REMOVE_SESSION_ERRORS,
})

export const signup = formUser => dispatch => (
  SessionApiUtil.postUser(formUser)
  .then(payload => dispatch(receiveCurrentUser(payload)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
)

export const login = formUser => dispatch => (
  SessionApiUtil.postSession(formUser)
    .then(payload => dispatch(receiveCurrentUser(payload)),
      errors => dispatch(receiveErrors(errors.responseJSON))
  )
)

export const logout = () => dispatch => (
  SessionApiUtil.deleteSession()
    .then(() => dispatch(logoutCurrentUser()))
)
