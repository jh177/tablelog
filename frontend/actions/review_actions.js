import * as ReviewAPIUtil from "../util/review_api_util";

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS"
export const REMOVE_REVIEW_ERRORS = "REMOVE_REVIEW_ERRORS"

const receiveAllReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews
})

const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
})

const removeReview = (reviewId) => ({
  type: REMOVE_REVIEW,
  reviewId
})

const receiveReviewErrors = (errors) => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
})

export const removeReviewErrors = () => ({
  type: REMOVE_REVIEW_ERRORS,
})


export const requestReviews = () => dispatch => (
  ReviewAPIUtil.fetchAllReviews()
    .then(reviews => dispatch(receiveAllReviews(reviews)))
)

export const requestReview = (reviewId) => dispatch => (
  ReviewAPIUtil.fetchReview(reviewId)
    .then(payload => dispatch(receiveReview(payload)))
)

export const createReview = (review) => dispatch => (
  ReviewAPIUtil.createReview(review)
    .then(review => dispatch(receiveReview(review)),
      errors => dispatch(receiveReviewErrors(errors.responseJSON))
    )
)

export const updateReview = (review) => dispatch => (
  ReviewAPIUtil.updateReview(review)
    .then(review => dispatch(receiveReview(review)))
)

export const deleteReview = (reviewId) => dispatch => (
  ReviewAPIUtil.deleteReview(reviewId)
    .then(() => dispatch(removeReview(reviewId)))
)