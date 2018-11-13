import React, { Component } from "react";
import { connect } from "react-redux";

import Loading from "./Loading";
import ItemList from "./ItemList";

import { FETCH_SHOP_ITEMS_REQUEST } from "../../actions/ActionTypes";

class ShopItemsList extends Component {
  componentDidMount() {
    this.props.fetchShopItems();
  }

  render() {
    const { loading } = this.props;

    const component = loading ? <Loading /> : <ItemList />;

    return component;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchShopItems: () => {
      dispatch({ type: FETCH_SHOP_ITEMS_REQUEST });
    }
  };
}

function mapStateToProps(state) {
  return {
    loading: state.shopItems.loading
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopItemsList);
