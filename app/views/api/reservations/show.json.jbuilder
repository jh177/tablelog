json.reservation do
  json.set! @reservation.id do
    json.partial! 'api/reservations/reservation', reservation: @reservation
  end
end

json.restaurant do
  json.set! @reservation.restaurant.id do
    json.partial! 'api/restaurants/restaurant', restaurant: @reservation.restaurant
    json.photoUrl url_for(@reservation.restaurant.photos[0])
  end
end

json.user do
  json.set! @reservation.user.id do
    json.partial! 'api/users/user', user: @reservation.user
  end
end

if @reservation.review.present?
  json.review do
    json.set! @reservation.review.id do
      json.partial! 'api/reviews/review', review: @reservation.review
    end
  end
end