import {
  FETCH_SHOP_ITEMS_REQUEST,
  FETCH_SHOP_ITEMS_SUCCESS,
  FETCH_SHOP_ITEMS_ERROR
} from "../actions/ActionTypes";

const defaultState = {
  loading: false,
  items: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_SHOP_ITEMS_REQUEST:
      return { ...state, loading: true };
    case FETCH_SHOP_ITEMS_SUCCESS:
      const { items } = action;

      return { loading: false, items };
    case FETCH_SHOP_ITEMS_ERROR:
      return { ...state, loading: false };
    default:
      return state;
  }
};
