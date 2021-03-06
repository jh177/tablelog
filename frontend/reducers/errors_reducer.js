import { combineReducers } from "redux";
import ReservationErrorsReducer from "./reservation_errors_reducer";
import ReviewErrorsReducer from "./review_errors_reducer";
import sessionErrorsReducer from "./session_errors_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  reservation: ReservationErrorsReducer,
  review: ReviewErrorsReducer
})

export default errorsReducer;