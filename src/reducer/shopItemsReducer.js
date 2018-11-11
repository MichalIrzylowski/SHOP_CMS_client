import { FETCH_SHOP_ITEMS_REQUEST } from "../actions/ActionTypes";

const defaultState = {
  loading: false,
  items: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_SHOP_ITEMS_REQUEST:
      return state;

    default:
      return state;
  }
};
