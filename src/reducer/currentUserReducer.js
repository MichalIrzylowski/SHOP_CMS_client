import { SET_CURRENT_USER, LOGOUT } from "../actions/ActionTypes";

const defaultUser = { id: null, login: null };

export default function(state = defaultUser, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.userData;
    case LOGOUT:
      sessionStorage.removeItem("token");
      return defaultUser;
    default:
      return state;
  }
}
