export const fetchAllReservations = () => (
  $.ajax({
    url: "/api/reservations",
    method: "get"
  })
)

export const fetchReservation = (reservationId) => (
  $.ajax({
    url: `/api/reservations${reservationId}`,
    method: "get"
  })
)

export const createReservation = (reservation) => (
  $.ajax({
    url: "/api/reservations",
    method: "post",
    data: {reservation}
  })
)

export const updateReservation = (reservation) => (
  $.ajax({
    url: `api/reservations/${reservation.id}`,
    method: "patch",
    data: { reservation }
  })
)

export const deleteReservation = (reservationId) => (
  $.ajax({
    url: `api/reservations/${reservationId}`,
    method: "delete"
  })
)