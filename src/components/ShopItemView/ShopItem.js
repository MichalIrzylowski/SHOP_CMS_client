import React from "react";

const width100 = { width: "100%" };

export default ({ item, deleteItem, editItem }) => (
  <div className="col-sm-4">
    <div className="card">
      <img src={item.image} style={width100} />
      <div className="card-body">
        <h3 className="card-title">{item.name}</h3>
        <hr className="my-4" />
        <p className="card-text">{item.description}</p>
        <hr className="my-4" />
        <p className="card-text">Price: {item.price} USD</p>
        <hr className="my-4" />
        <p className="card-text">Category: {item.category}</p>
        <hr className="my-4" />
        <div className="btn btn-outline-warning" onClick={editItem}>
          Edit
        </div>
        <div className="btn btn-outline-danger" onClick={deleteItem}>
          Delete
        </div>
      </div>
    </div>
  </div>
);
