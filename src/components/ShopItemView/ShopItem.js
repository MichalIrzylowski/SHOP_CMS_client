import React from "react";

const width100 = { width: "100%" };

export default ({ item }) => (
  <div className="col-sm-4">
    <div className="card">
      <img src={item.image} style={width100} />
      <div className="card-body">
        <h3 className="card-title">{item.name}</h3>
        <p className="card-text">{item.description}</p>
        <p className="card-text">Price: {item.price} USD</p>
        <div className="btn btn-outline-warning">Edit</div>
        <div className="btn btn-outline-danger">Delete</div>
      </div>
    </div>
  </div>
);
