// export const fecthAllRestaurants = (searchTerm) => (
//   $.ajax({
//     url: "/api/restaurants",
//     method: "get",
//     data: {searchTerm}
//   })
// )

export const fecthAllRestaurants = () => (
  $.ajax({
    url: "/api/restaurants",
    method: "get",
  })
)

export const fecthRestaurant = (restaurantId) => (
  $.ajax({
    url: `/api/restaurants/${restaurantId}`,
    method: "get",
    error: (err) => console.log(err)
  })
)

export const fecthRestaurants = (query) => (
  $.ajax({
    url: "/api/restaurants/search",
    method: "get",
    data: { query }
  })
)