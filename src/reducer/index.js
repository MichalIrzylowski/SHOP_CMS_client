import { combineReducers } from "redux";
import authenticateReducer from "./authenticateReducer";
import currentUser from "./currentUserReducer";
import errors from "./errorReducer";

const RootReducer = combineReducers({
  authenticateReducer,
  currentUser,
  errors
});

export default RootReducer;
