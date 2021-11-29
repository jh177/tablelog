export const fecthAllRestaurants = () => (
  $.ajax({
    url: "/api/restaurants",
    method: "get"
  })
)

export const fecthRestaurant = (restaurantId) => (
  $.ajax({
    url: `/api/restaurants/${restaurantId}`,
    method: "get",
    error: (err) => console.log(err)
  })
)