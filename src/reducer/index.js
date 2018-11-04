import { combineReducers } from "redux";
import authenticateReducer from "./authenticateReducer";
import currentUser from "./currentUserReducer";

const RootReducer = combineReducers({
  authenticateReducer,
  currentUser
});

export default RootReducer;
