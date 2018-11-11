import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import withAuth from "../HOCS/withAuth";
import Landing from "./Landing";
import AuthForm from "./AuthForm";
import AddShopItemForm from "./AddShopItemForm/";
import NoMatch from "./NoMatch";
import ShopItemView from "./ShopItemView";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/login" component={AuthForm} />
      <Route exact path="/register" component={AuthForm} />
      <Route exact path="/add_item" component={withAuth(AddShopItemForm)} />
      <Route exact path="/shop_items" component={withAuth(ShopItemView)} />
      <Route component={NoMatch} />
    </Switch>
  );
};

export default withRouter(Main);
