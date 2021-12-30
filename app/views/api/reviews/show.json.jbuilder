json.review do
  json.set! @review.id do
    json.partial! 'api/reviews/review', review: @review
  end
end

json.restaurant do
  json.set! @review.restaurant.id do
    json.partial! 'api/restaurants/restaurant', restaurant: @review.restaurant
    json.photoUrl url_for(@review.restaurant.photos[0])
  end
end

json.reservation do
  json.set! @review.reservation.id do
    json.partial! 'api/reservations/reservation', reservation: @review.reservation
  end
end

json.user do
  json.set! @review.user.id do
    json.partial! 'api/users/user', user: @review.user
  end
end