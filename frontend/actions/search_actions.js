import { fecthAllRestaurants} from "../util/restaurant_api_util"

export const RECEIVE_SEARCH = "RECEIVE_SEARCH";

export const receiveSearch = (filter) => ({
  type: RECEIVE_SEARCH,
  filter
})

export const 