json.review do
  json.set! @review.id do
    json.partial! 'api/reviews/review', review: @review
  end
end

json.restaurant do
  json.set! @review.restaurant.id do
    json.partial! 'api/restaurants/restaurant', restaurant: @review.restaurant
  end
end

json.user do
  json.set! @review.user.id do
    json.partial! 'api/users/user', user: @review.user
  end
end