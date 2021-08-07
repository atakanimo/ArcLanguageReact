import { combineReducers } from "redux";
import apiReducers from "./apiReducers";
import searchReducer from "./searchReducer"
import errorHandlingReducer from "./errorHandlingReducer";
import isLogInReducer from "./isLogInReducer";

const rootReducer = combineReducers({
  apiReducers,
  searchReducer,
  errorHandlingReducer,
  isLogInReducer
});

export default rootReducer;
