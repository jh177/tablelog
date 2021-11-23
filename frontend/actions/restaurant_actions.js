import * as RestaurantAPIUtil from "../util/restaurant_util";

export const RECEIVE_RESTAURANTS = "RECEIVE_RESTAURANTS"
export const RECEIVE_RESTAURANT = "RECEIVE_RESTAURANT"

const receiveAllRestaurants = (restaurants) => ({
  type: RECEIVE_RESTAURANTS,
  restaurants
})

const receiveRestaurant = (restaurant) => ({
  type: RECEIVE_RESTAURANT,
  restaurant
})

export const requestRestaurants = () => dispatch => (
  RestaurantAPIUtil.fecthAllRestaurants()
    .then(restaurants => dispatch(receiveAllRestaurants(restaurant)))
)

export const requestRestaurant = (restaurantId) => dispatch => (
  RestaurantAPIUtil.fecthRestaurant(restaurantId)
    .then(restaurant => dispatch(receiveRestaurant(restaurant)))
)
