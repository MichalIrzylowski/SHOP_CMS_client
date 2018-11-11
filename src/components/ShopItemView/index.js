import React, { Component } from "react";
import { connect } from "react-redux";

import { FETCH_SHOP_ITEMS_REQUEST } from "../../actions/ActionTypes";

class ShopItemsList extends Component {
  componentDidMount() {
    this.props.fetchShopItems();
  }

  render() {
    return <div className="container">Loading...</div>;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchShopItems: () => {
      dispatch({ type: FETCH_SHOP_ITEMS_REQUEST });
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(ShopItemsList);
