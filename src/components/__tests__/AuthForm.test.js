import React from "react";
import { mount } from "enzyme";

import AuthForm from "../AuthForm";
import Provider from "../../Provider";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Provider>
      <AuthForm location={{ pathname: "/login" }} />
    </Provider>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("has header, two imputs, and a button", () => {
  expect(wrapped.find("h1").text()).toEqual("Login to Shop-Name manager.");
  expect(wrapped.find("h1").length).toEqual(1);
  expect(wrapped.find("input").length).toEqual(2);
  expect(wrapped.find("button").length).toEqual(1);
});

describe("inputs and a button", () => {
  beforeEach(() => {
    wrapped.find("input[type='text']").simulate("change", {
      target: { value: "new login", name: "login" }
    });
    wrapped.find("input[type='password']").simulate("change", {
      target: { value: "new password", name: "password" }
    });
    wrapped.update();
  });

  it("you can type into each input", () => {
    expect(wrapped.find("input[type='text']").prop("value")).toEqual(
      "new login"
    );
    expect(wrapped.find("input[type='password']").prop("value")).toEqual(
      "new password"
    );
  });

  it("resets form when on submit", () => {
    wrapped.find("form").simulate("submit");
    wrapped.update();

    expect(wrapped.find("input[type='text']").prop("value")).toEqual("");
    expect(wrapped.find("input[type='password']").prop("value")).toEqual("");
  });
});
