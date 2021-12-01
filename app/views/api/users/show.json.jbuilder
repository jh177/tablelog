json.user do
  json.set! @user.id do
    json.partial! 'api/users/user', user: @user
  end
end

@user.reservations.each do |reservation|
  json.reservations do
    json.set! reservation.id do 
      json.partial! 'api/reservations/reservation', reservation: reservation
      if reservation.review.present?
        json.review do
          json.extract! reservation.review, :overall, :body, :reservation_id
        end
      end
    end
  end

  # if reservation.review.present?
  #   json.reviews do
  #     json.set! reservation.review.id do
  #       json.extract! reservation.review, :overall, :body, :reservation_id
  #     end
  #   end
  # end
end

json.restaurants do
  @user.restaurants.each do |restaurant|
    json.set! restaurant.id do
      json.partial! 'api/restaurants/restaurant', restaurant: restaurant
    end
  end
end