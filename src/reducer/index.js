import { combineReducers } from "redux";
import login from "./loginReducer";

const RootReducer = combineReducers({ login });

export default RootReducer;
