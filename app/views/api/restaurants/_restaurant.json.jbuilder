json.extract! restaurant, :id, :name, :description, :category, :address, :city
json.photoUrls restaurant.photos.map { |file| url_for(file) }
