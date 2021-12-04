@restaurants.each do |restaurant|
  json.set! restaurant.id do
    json.partial! 'api/restaurants/restaurant', restaurant: restaurant
    json.photoUrl url_for(restaurant.photos[0])
  end
end