import * as ReservationAPIUtil from "../util/reservation_util";

export const RECEIVE_RESERVATIONS = "RECEIVE_RESERVATIONS";
export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION";
export const REMOVE_RESERVATION = "REMOVE_RESERVATION";
export const RECEIVE_RESERVATION_ERRORS = 'RECEIVE_RESERVATION_ERRORS';
export const REMOVE_RESERVATION_ERRORS = 'REMOVE_RESERVATION_ERRORS';


const receiveAllReservations = (reservations) => ({
  type: RECEIVE_RESERVATIONS,
  reservations
})

const receiveReservation = (payload) => ({
  type: RECEIVE_RESERVATION,
  payload
})

const removeReservation = (reservationId) => ({
  type: REMOVE_RESERVATION,
  reservationId
})

const receiveReservationErrors = (errors) => ({
  type: RECEIVE_RESERVATION_ERRORS,
  errors
})

export const removeReservationErrors = () => ({
  type: REMOVE_RESERVATION_ERRORS,
})


export const requestReservations = () => dispatch => (
  ReservationAPIUtil.fetchAllReservations()
    .then(reservations => dispatch(receiveAllReservations(reservations)))
)

export const requestReservation = (reservationId) => dispatch => (
  ReservationAPIUtil.fetchReservation(reservationId)
    .then(payload => dispatch(receiveReservation(payload)))
)

export const createReservation = (reservation) => dispatch => (
  ReservationAPIUtil.createReservation(reservation)
    .then(reservation => dispatch(receiveReservation(reservation)),
      errors => dispatch(receiveReservationErrors(errors.responseJSON))
      )
)

export const updateReservation = (reservation) => dispatch => (
  ReservationAPIUtil.updateReservation(reservation)
    .then(reservation => dispatch(receiveReservation(reservation)),
      errors => dispatch(receiveReservationErrors(errors.responseJSON))
      )
)

export const deleteReservation = (reservationId) => dispatch => (
  ReservationAPIUtil.deleteReservation(reservationId)
    .then(() => dispatch(removeReservation(reservationId)))
)