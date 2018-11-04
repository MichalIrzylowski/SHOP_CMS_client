import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import Provider from "../../Provider";
import Main from "../Main";
import NoMatch from "../NoMatch";
import AuthForm from "../AuthForm";
import Landing from "../Landing";

let wrapped;
let index = 0;

beforeEach(() => {
  wrapped = mount(
    <Provider>
      <MemoryRouter
        initialEntries={["/badRoute", "/login", "/register", "/"]}
        initialIndex={index}
      >
        <Main />
      </MemoryRouter>
    </Provider>
  );
});

afterEach(() => {
  wrapped.unmount();
  index++;
});

it("should redirect to NoMatch component if wrong path is present", () => {
  expect(wrapped.find(NoMatch).length).toEqual(1);
  expect(wrapped.find(AuthForm).length).toEqual(0);
  expect(wrapped.find(Landing).length).toEqual(0);
});

it("should redirect to AuthForm component if '/login' path is present", () => {
  expect(wrapped.find(NoMatch).length).toEqual(0);
  expect(wrapped.find(AuthForm).length).toEqual(1);
  expect(wrapped.find(Landing).length).toEqual(0);
});

it("should redirect to AuthForm component if '/register' path is present", () => {
  expect(wrapped.find(NoMatch).length).toEqual(0);
  expect(wrapped.find(AuthForm).length).toEqual(1);
  expect(wrapped.find(Landing).length).toEqual(0);
});

it("should redirect to Landing component if '/' path is present", () => {
  expect(wrapped.find(NoMatch).length).toEqual(0);
  expect(wrapped.find(AuthForm).length).toEqual(0);
  expect(wrapped.find(Landing).length).toEqual(1);
});
