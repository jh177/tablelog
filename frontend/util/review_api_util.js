export const fetchAllReviews= () =>(
  $.ajax({
    url: "/api/reviews",
    method: "get"
  })
)

export const fetchReview = (reviewId) => (
  $.ajax({
    url: `/api/reviews/${reviewId}`,
    method: "get"
  })
)

export const createReview = (review) => (
  $.ajax({
    url: "/api/reviews",
    method: "post",
    data: { review }
  })
)

export const updateReview = (review) => (
  $.ajax({
    url: `api/reviews/${review.id}`,
    method: "patch",
    data: { review }
  })
)

export const deleteReview = (reviewId) => (
  $.ajax({
    url: `api/reviews/${reviewId}`,
    method: "delete"
  })
)