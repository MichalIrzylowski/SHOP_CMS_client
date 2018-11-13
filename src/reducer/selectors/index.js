import { createSelector } from "reselect";

const all_categories = "all_categories";
const cat1 = "category 1";
const cat2 = "category 2";
const cat3 = "category 3";
const cat4 = "category 4";

const getCategoryFilter = state => state.shopItems.category;
const getItems = state => state.shopItems.items;

export const getVisibleItems = createSelector(
  [getCategoryFilter, getItems],
  (category, items) => {
    switch (category) {
      case all_categories:
        return items;
      case cat1:
        return items.filter(item => item.category === cat1);
      case cat2:
        return items.filter(item => item.category === cat2);
      case cat3:
        return items.filter(item => item.category === cat3);
      case cat4:
        return items.filter(item => item.category === cat4);
      default:
        return items;
    }
  }
);
