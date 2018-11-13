import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ShopItem from "./ShopItem";
import {
  CHANGE_CATEGORY,
  REMOVE_ITEM_REQUEST
} from "../../actions/ActionTypes";
import { getVisibleItems } from "../../reducer/selectors";

class ItemList extends Component {
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleChangeCategory = e => {
    const { changeCategory } = this.props;

    changeCategory(e.target.value);
  };

  editItem = id => {
    this.props.history.push(`/edit/${id}`);
  };

  render() {
    const { visibleItems, deleteItem } = this.props;

    const ShopItems = visibleItems.map(item => (
      <ShopItem
        key={item._id}
        item={item}
        deleteItem={deleteItem.bind(this, item._id)}
        editItem={this.editItem.bind(this, item._id)}
      />
    ));

    return (
      <div className="container">
        <div className="form-group">
          Filter items:
          <select
            className="form-control"
            onChange={this.handleChangeCategory}
            name="category"
          >
            <option value="all_categories">All categories</option>
            <option value="category 1">Category 1</option>
            <option value="category 2">Category 2</option>
            <option value="category 3">Category 3</option>
            <option value="category 4">Category 4</option>
          </select>
        </div>
        <div className="row">{ShopItems}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    visibleItems: getVisibleItems(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeCategory: category => {
      dispatch({ type: CHANGE_CATEGORY, category });
    },
    deleteItem: id => {
      dispatch({ type: REMOVE_ITEM_REQUEST, id });
    }
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ItemList)
);
