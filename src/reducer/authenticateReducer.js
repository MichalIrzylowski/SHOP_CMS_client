import {
  AUTHENTICATE_REQUEST,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_FAIL
} from "../actions/ActionTypes";

const defaultState = {
  loading: false
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case AUTHENTICATE_REQUEST:
      return { ...state, loading: true };
    case AUTHENTICATE_SUCCESS:
      return { loading: false };
    case AUTHENTICATE_FAIL:
      return { loading: false };
    default:
      return state;
  }
}
