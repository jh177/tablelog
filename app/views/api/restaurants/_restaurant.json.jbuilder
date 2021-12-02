json.extract! restaurant, :id, :name, :description, :category, :address, :city, :lat, :lng, :average_rating, :num_reviews, :num_reservations
json.photoUrls restaurant.photos.map { |file| url_for(file) }
