import React from "react";
import { shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";

import App from "../App";
import Navbar from "../Navbar";
import Main from "../Main";

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it("has navbar in it", () => {
  expect(wrapped.find(Navbar).length).toEqual(1);
});

it("has 'MAIN' component in it", () => {
  expect(wrapped.find(Main).length).toEqual(1);
});
