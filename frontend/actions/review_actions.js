import * as ReviewAPIUtil from "../util/review_api_util";

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

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
    .then(review => dispatch(receiveReview(review)))
)

export const updateReview = (review) => dispatch => (
  ReviewAPIUtil.updateReview(review)
    .then(review => dispatch(receiveReview(review)))
)

export const deleteReview = (reviewId) => dispatch => (
  ReviewAPIUtil.deleteReview(reviewId)
    .then(() => dispatch(removeReview(reviewId)))
)