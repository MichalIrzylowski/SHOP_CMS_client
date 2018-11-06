import { PUT_ERROR, REMOVE_ERRORS } from "../actions/ActionTypes";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_ERRORS:
      return [];
    case PUT_ERROR:
      return [...initialState, action.error];
    default:
      return state;
  }
};
