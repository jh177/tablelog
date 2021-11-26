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

export const timeSlots = [
  "12:00 AM", "12:30 AM", "1:00 AM", "1:30 AM", "2:00 AM", "2:30 AM",
  "3:00 AM", "3:30 AM", "4:00 AM", "4:30 AM", "5:00 AM", "5:30 AM",
  "6:00 AM", "6:30 AM", "7:00 AM", "7:30 AM", "8:00 AM", "8:30 AM",
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
  "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM",
  "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM", "11:00 PM", "11:30 PM"
]