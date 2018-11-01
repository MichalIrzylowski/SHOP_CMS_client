import loginReducer from "../loginReducer";
import { LOGIN_REQUEST, LOGIN_SUCCESS } from "../../actions/ActionTypes";

it("handles the LOGIN_REQUEST action", () => {
  const action = {
    type: LOGIN_REQUEST,
    payload: { name: "Heniu", password: "Secret password" }
  };

  const newState = loginReducer({}, action);

  expect(newState).toEqual({ loading: true });
});

it("handles action of LOGIN_SUCCESS type", () => {
  const action = {
    type: LOGIN_SUCCESS,
    payload: { name: "Heniu", password: "Secret password" }
  };

  const newState = loginReducer({}, action);

  expect(newState).toEqual({
    loading: false,
    user: { name: "Heniu", password: "Secret password" }
  });
});
