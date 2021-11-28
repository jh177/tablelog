json.reservation do
  json.partial! 'api/reservations/reservation', reservation: @reservation
end

json.restaurant do
  json.extract! @reservation.restaurant, :id, :name, :description, :category, :address, :city, :lat, :lng
end

json.user do 
  json.extract! @reservation.user, :email, :id, :fname, :lname
end