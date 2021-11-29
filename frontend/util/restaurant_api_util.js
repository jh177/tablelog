export const fecthAllRestaurants = (searchTerm) => (
  $.ajax({
    url: "/api/restaurants",
    method: "get",
    data: {searchTerm}
  })
)

export const fecthRestaurant = (restaurantId) => (
  $.ajax({
    url: `/api/restaurants/${restaurantId}`,
    method: "get",
    error: (err) => console.log(err)
  })
)