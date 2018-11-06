import React from "react";

const width100 = { width: "100%" };
const height100 = { height: "100%" };

export default ({ title, text, picture }) => {
  return (
    <div className="col-sm">
      <div className="card" style={height100}>
        {picture && <img src={picture} alt="obrazek" style={width100} />}
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <hr className="my-4" />
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
};
