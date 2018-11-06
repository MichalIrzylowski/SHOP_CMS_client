import React from "react";
import { mount } from "enzyme";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Provider from "../../Provider";

import Navbar from "../Navbar";

it("has 3 links", () => {
  let wrapped = mount(
    <Provider>
      <Router>
        <Navbar />
      </Router>
    </Provider>
  );
  expect(wrapped.find(Link).length).toEqual(3);
});
