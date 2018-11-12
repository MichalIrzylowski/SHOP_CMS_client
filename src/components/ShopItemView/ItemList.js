import React from "react";
import ShopItem from "./ShopItem";

const ItemList = ({ items }) => {
  const ShopItems = items.map(item => <ShopItem key={item._id} item={item} />);

  return (
    <div className="container">
      <div className="row">{ShopItems}</div>
    </div>
  );
};

export default ItemList;
