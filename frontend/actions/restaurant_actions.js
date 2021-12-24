import * as RestaurantAPIUtil from "../util/restaurant_api_util";

export const RECEIVE_RESTAURANTS = "RECEIVE_RESTAURANTS"
export const RECEIVE_RESTAURANT = "RECEIVE_RESTAURANT"

const receiveRestaurants = (restaurants) => ({
  type: RECEIVE_RESTAURANTS,
  restaurants
})

const receiveRestaurant = (payload) => ({
  type: RECEIVE_RESTAURANT,
  payload
})

export const requestAllRestaurants = () => dispatch => (
  RestaurantAPIUtil.fecthAllRestaurants()
    .then(restaurants => dispatch(receiveRestaurants(restaurants)))
)

export const requestRestaurant = (restaurantId) => dispatch => (
  RestaurantAPIUtil.fecthRestaurant(restaurantId)
    .then(payload => dispatch(receiveRestaurant(payload)))
)

export const requestRestaurants = (query) => dispatch => (
  RestaurantAPIUtil.fecthRestaurants(query)
    .then(restaurants => dispatch(receiveRestaurants(restaurants)))
)