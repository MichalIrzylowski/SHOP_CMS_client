import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import Landing from "./Landing";
import AuthForm from "./AuthForm";
import AddShopItemForm from "./AddShopItemForm/";
import NoMatch from "./NoMatch";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/login" component={AuthForm} />
      <Route exact path="/register" component={AuthForm} />
      <Route exact path="/add_item" component={AddShopItemForm} />
      <Route component={NoMatch} />
    </Switch>
  );
};

export default withRouter(Main);
