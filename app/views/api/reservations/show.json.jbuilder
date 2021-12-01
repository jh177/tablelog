json.reservation do
  json.partial! 'api/reservations/reservation', reservation: @reservation
end

json.restaurant do
  json.set! @reservation.restaurant.id do
    json.partial! 'api/restaurants/restaurant', restaurant: @reservation.restaurant
  end
end

json.user do
  json.set! @reservation.user.id do
    json.partial! 'api/users/user', user: @reservation.user
  end
end

json.review do
  json.set! @reservation.review.id do
    json.partial! 'api/reviews/review', review: @reservation.review
  end
end
