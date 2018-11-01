import { LOGIN_REQUEST, LOGIN_SUCCESS } from "../actions/ActionTypes";

const defaultState = {
  loading: false,
  user: null
};

export default function loginReducer(state = defaultState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { loading: false, user: action.payload };
    default:
      return state;
  }
}
