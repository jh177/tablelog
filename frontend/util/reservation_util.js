export const fetchAllReservations = () => (
  $.ajax({
    url: "/api/reservations",
    method: "get"
  })
)

export const fetchReservation = (reservationId) => (
  $.ajax({
    url: `/api/reservations/${reservationId}`,
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
  "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
  "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM",
  "9:00 PM", "9:30 PM", "10:00 PM", "11:00 PM", "11:30 PM"
]

export const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

export const today = new Date().toLocaleString("en-US", {
  timeZone: timezone,
  year: 'numeric',
  month: 'numeric',
  day: 'numeric'
})

export const todayDate = new Date(today).toJSON().slice(0, 10)

export const currentTime = new Date().toLocaleTimeString("en-US", {
  timeZone: timezone,
  hour: '2-digit',
  minute: '2-digit'
})

export const todayTimeSlots = timeSlots.filter(time=>
  new Date(`${todayDate} ${time}`) > new Date(`${todayDate} ${currentTime}`)
)