json.restaurant do
  json.set! @restaurant.id do
    json.partial! 'api/restaurants/restaurant', restaurant: @restaurant
  end
end

json.reviews do
  @restaurant.reviews.each do |review|
    json.set! review.id do
      json.partial! 'api/reviews/review', review: review
    end
  end
end