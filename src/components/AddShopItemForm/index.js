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
    this.props.addItem();
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
    addItem: () => dispatch({ type: ADD_SHOP_ITEM })
  };
}

export default connect(
  null,
  mapDispatchToProps
)(AddShopItemForm);
