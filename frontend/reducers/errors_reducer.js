import { combineReducers } from "redux";
import ReservationErrorsReducer from "./reservation_errors_reducer";
import sessionErrorsReducer from "./session_errors_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  reservation: ReservationErrorsReducer
})

export default errorsReducer;