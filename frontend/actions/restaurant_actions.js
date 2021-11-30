import * as RestaurantAPIUtil from "../util/restaurant_api_util";

export const RECEIVE_RESTAURANTS = "RECEIVE_RESTAURANTS"
export const RECEIVE_RESTAURANT = "RECEIVE_RESTAURANT"

const receiveAllRestaurants = (restaurants) => ({
  type: RECEIVE_RESTAURANTS,
  restaurants
})

const receiveRestaurant = (payload) => ({
  type: RECEIVE_RESTAURANT,
  payload
})

export const requestRestaurants = (searchTerm) => dispatch => (
  RestaurantAPIUtil.fecthAllRestaurants(searchTerm)
    .then(restaurants => dispatch(receiveAllRestaurants(restaurants)))
)

export const requestRestaurant = (restaurantId) => dispatch => (
  RestaurantAPIUtil.fecthRestaurant(restaurantId)
    .then(payload => dispatch(receiveRestaurant(payload)))
)
