import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import { MemoryRouter } from "react-router-dom";
import { createStore } from "redux";
import Provider from "../Provider";
import App from "../components/App";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("localhost:8081/api/authenticate/register", {
    status: 200,
    response: { id: "123", login: "Heniu", token: "very_secret_token" }
  });
});

afterEach(() => {
  moxios.uninstall();
});

it("can register and set current user into reducer", () => {
  const wrapped = mount(
    <Provider>
      <MemoryRouter initialEntries={["/register"]} initialIndex={0}>
        <App />
      </MemoryRouter>
    </Provider>
  );

  expect(wrapped.find("form").length).toEqual(1);

  wrapped.find("input[type='text']").simulate("change", {
    target: { value: "Heniu", name: "login" }
  });

  wrapped.find("input[type='password']").simulate("change", {
    target: { value: "asd", name: "password" }
  });

  wrapped.update();

  expect(wrapped.find("input[type='text']").prop("value")).toEqual("Heniu");
  expect(wrapped.find("input[type='password']").prop("value")).toEqual("asd");

  wrapped.find("form").simulate("submit");
  wrapped.update();

  // TODO - find out how to test redux store
  expect(wrapped.find("input[type='text']").prop("value")).toEqual("");
  expect(wrapped.find("input[type='password']").prop("value")).toEqual("");
});
