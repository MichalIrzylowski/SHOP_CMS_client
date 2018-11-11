import { combineReducers } from "redux";
import authenticateReducer from "./authenticateReducer";
import currentUser from "./currentUserReducer";
import errors from "./errorReducer";
import shopItems from "./shopItemsReducer";

const RootReducer = combineReducers({
  authenticateReducer,
  currentUser,
  errors,
  shopItems
});

export default RootReducer;
