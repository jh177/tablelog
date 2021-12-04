json.restaurant do
  json.set! @restaurant.id do
    json.partial! 'api/restaurants/restaurant', restaurant: @restaurant
    json.photoUrls @restaurant.photos.map { |file| url_for(file) }
  end
end

@restaurant.reviews.each do |review|
  json.reviews do
    json.set! review.id do
      json.partial! 'api/reviews/review', review: review
    end
  end

  json.users do
    json.set! review.user.id do
      json.extract! review.user, :fname, :lname
    end
  end
end