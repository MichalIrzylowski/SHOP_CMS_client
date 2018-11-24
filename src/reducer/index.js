import { combineReducers } from "redux";
import authenticateReducer from "./authenticateReducer";
import currentUser from "./currentUserReducer";
import errors from "./errorReducer";
import shopItems from "./shopItemsReducer";
import information from "./informationReducer";
import messages from "./messagesReducer";

const RootReducer = combineReducers({
  authenticateReducer,
  currentUser,
  errors,
  shopItems,
  information,
  messages
});

export default RootReducer;
