import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ProductCardPreview from "./ProductCardPreview";
import {
  ADD_SHOP_ITEM,
  FIND_ITEM_REQUEST,
  REMOVE_FETCHED_ITEM
} from "../../actions/ActionTypes";

class AddShopItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      imgSrc: "",
      price: undefined,
      category: "",
      picture: undefined
    };
  }

  componentDidMount = () => {
    if (this.props.match.params.id) {
      this.props.fetchItem(this.props.match.params.id);
    } else {
      this.props.removeFetchedItem();
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFileAdd = e => {
    const file = e.target.files[0];
    this.setState({ [e.target.name]: file });
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      this.setState({ imgSrc: reader.result });
    });
    reader.readAsDataURL(file);
  };

  handleSubmit = e => {
    const isEdit = this.props.location.pathname.includes("edit");

    e.preventDefault();
    if (!isEdit) {
      const { name, description, picture, price, category } = this.state;
      const { currentUserId } = this.props;
      this.props.addItem(
        name,
        description,
        picture,
        currentUserId,
        price,
        category
      );
    }
  };

  render() {
    const { information, loading } = this.props;

    const { name, description, image, price } = this.props.fetchedItem;

    const isEdit = this.props.location.pathname.includes("edit");

    const typeOfBtn = isEdit ? (
      <button type="submit" className="btn btn-warning" disabled={loading}>
        Edit a product
      </button>
    ) : (
      <button type="submit" className="btn btn-success" disabled={loading}>
        Add a product
      </button>
    );

    return (
      <div className="container">
        {information && (
          <div className="alert alert-primary">{information}</div>
        )}
        <h1 className="text-center">Add new item to the shop</h1>
        <div className="row">
          <ProductCardPreview
            title={this.state.name || name}
            text={this.state.description || description}
            picture={this.state.imgSrc || image}
            price={this.state.price || price}
          />
          <div className="col-sm">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name of a product:</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter name of a product here."
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Price:</label>
                <input
                  className="form-control"
                  type="number"
                  name="price"
                  id="price"
                  placeholder="Enter price"
                  onChange={this.handleChange}
                />{" "}
                USD
              </div>
              <div className="form-group">
                <label htmlFor="category">Category:</label>
                <select
                  name="category"
                  id="category"
                  className="form-control"
                  onChange={this.handleChange}
                >
                  <option value="">Choose category...</option>
                  <option value="category 1">Category 1</option>
                  <option value="category 2">Category 2</option>
                  <option value="category 3">Category 3</option>
                  <option value="category 4">Category 4</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="description">Description of a product:</label>
                <textarea
                  name="description"
                  id="description"
                  className="form-control"
                  rows="10"
                  placeholder="Type in description here."
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="picture">Picture: </label>
                <input
                  className="form-control-file"
                  type="file"
                  name="picture"
                  id="picture"
                  onChange={this.handleFileAdd}
                />
              </div>
              {typeOfBtn}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addItem: (name, description, picture, userId, price, category) =>
      dispatch({
        type: ADD_SHOP_ITEM,
        data: { name, description, picture, userId, price, category }
      }),
    fetchItem: id => {
      dispatch({ type: FIND_ITEM_REQUEST, id });
    },
    removeFetchedItem: () => {
      dispatch({ type: REMOVE_FETCHED_ITEM });
    }
  };
}

function mapStateToProps(state) {
  return {
    currentUserId: state.currentUser.id,
    information: state.information,
    loading: state.shopItems.loading,
    fetchedItem: state.fetchedItem
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddShopItemForm)
);
