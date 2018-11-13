import { FIND_ITEM_SUCCESS, REMOVE_FETCHED_ITEM } from "../actions/ActionTypes";

const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case FIND_ITEM_SUCCESS:
      return action.item;
    case REMOVE_FETCHED_ITEM: {
      return defaultState;
    }
    default:
      return state;
  }
};
