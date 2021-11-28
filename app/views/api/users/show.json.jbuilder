json.user do
  json.set! @user.id do
    json.partial! 'api/users/user', user: @user
  end
end

json.reservations do
  @user.reservations.each do |reservation|
    json.set! reservation.id do 
      json.partial! 'api/reservations/reservation', reservation: reservation
    end
  end
end

json.restaurants do
  @user.restaurants.each do |restaurant|
    json.set! restaurant.id do
      json.partial! 'api/restaurants/restaurant', restaurant: restaurant
    end
  end
end