import React from "react";
import { shallow } from "enzyme";

import App from "../App";
import LoginForm from "../LoginForm";

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it("has login form in it", () => {
  expect(wrapped.find(LoginForm).length).toEqual(1);
});
