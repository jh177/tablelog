json.extract! restaurant, :id, :name, :description, :category, :address, :city, :lat, :lng, :average_rating
json.photoUrls restaurant.photos.map { |file| url_for(file) }
