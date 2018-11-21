import {
  FETCH_SHOP_ITEMS_REQUEST,
  FETCH_SHOP_ITEMS_SUCCESS,
  FETCH_SHOP_ITEMS_ERROR,
  ADD_SHOP_ITEM,
  ADD_SHOP_ITEM_SUCCESS,
  CHANGE_CATEGORY,
  REMOVE_ITEM_SUCCESS,
  ADD_SHOP_ITEM_FAIL,
  UPDATE_ITEM_SUCCESS
} from "../actions/ActionTypes";

const defaultState = {
  loading: false,
  items: [],
  category: "all_categories"
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

    case ADD_SHOP_ITEM:
      return { ...state, loading: true };

    case ADD_SHOP_ITEM_SUCCESS:
      return { loading: false, items: [...state.items, action.item] };

    case ADD_SHOP_ITEM_FAIL:
      return { ...state, loading: false };

    case REMOVE_ITEM_SUCCESS:
      const Items = state.items.filter(item => item._id !== action.id);
      return { ...state, items: Items };

    case CHANGE_CATEGORY:
      return { ...state, category: action.category };

    case UPDATE_ITEM_SUCCESS:
      const itemsAfterUpdate = state.items.map(item => {
        if (item._id === action.updatedItem._id) {
          return action.updatedItem;
        } else {
          return item;
        }
      });
      return { ...state, items: itemsAfterUpdate };
    default:
      return state;
  }
};
