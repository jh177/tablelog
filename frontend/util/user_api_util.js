export const fetchUser = (userId) => (
  $.ajax({
    url: `/api/users/${userId}`,
    method: "get"
  })
)