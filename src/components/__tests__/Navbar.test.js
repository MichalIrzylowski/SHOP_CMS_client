import React from "react";
import { mount } from "enzyme";
import { BrowserRouter as Router, Link } from "react-router-dom";

import Navbar from "../Navbar";

it("has 3 links", () => {
  let wrapped = mount(
    <Router>
      <Navbar />
    </Router>
  );
  expect(wrapped.find(Link).length).toEqual(3);
});
