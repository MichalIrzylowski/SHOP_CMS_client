import React, { Component } from "react";
import { connect } from "react-redux";
import ProductCardPreview from "./ProductCardPreview";
import { ADD_SHOP_ITEM } from "../../actions/ActionTypes";

class AddShopItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      imgSrc: "",
      price: undefined,
      picture: undefined
    };
  }

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
    e.preventDefault();
    const { name, description, picture, price } = this.state;
    const { currentUserId } = this.props;
    this.props.addItem(name, description, picture, currentUserId, price);
  };

  render() {
    const isFormLoading = false;

    return (
      <div className="container">
        <h1 className="text-center">Add new item to the shop</h1>
        <div className="row">
          <ProductCardPreview
            title={this.state.name}
            text={this.state.description}
            picture={this.state.imgSrc}
            price={this.state.price}
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
                  value={this.state.price}
                  onChange={this.handleChange}
                />{" "}
                USD
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
              <button
                type="submit"
                className="btn btn-success"
                disabled={isFormLoading}
              >
                Add a product
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addItem: (name, description, picture, userId, price) =>
      dispatch({
        type: ADD_SHOP_ITEM,
        data: { name, description, picture, userId, price }
      })
  };
}

function mapStateToProps(state) {
  return {
    currentUserId: state.currentUser.id
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddShopItemForm);
