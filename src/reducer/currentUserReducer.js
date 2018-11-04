import { SET_CURRENT_USER } from "../actions/ActionTypes";

const defaultUser = { id: null, login: null };

export default function(state = defaultUser, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.userData;
    default:
      return state;
  }
}
