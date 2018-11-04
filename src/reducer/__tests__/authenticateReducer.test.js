import authenticateReducer from "../authenticateReducer";
import {
  AUTHENTICATE_REQUEST,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_FAIL
} from "../../actions/ActionTypes";

it("handles the AUTHENTICATE_REQUEST action", () => {
  const action = {
    type: AUTHENTICATE_REQUEST
  };

  const newState = authenticateReducer({ loading: false }, action);

  expect(newState).toEqual({ loading: true });
});

it("handles action of AUTHENTICATE_SUCCESS type", () => {
  const action = {
    type: AUTHENTICATE_SUCCESS
  };

  const newState = authenticateReducer({}, action);

  expect(newState).toEqual({
    loading: false
  });
});

it("handles action of AUTHENTICATE_FAIL type", () => {
  const action = {
    type: AUTHENTICATE_FAIL
  };

  const newState = authenticateReducer({}, action);

  expect(newState).toEqual({
    loading: false
  });
});

it("handles action of unknown type", () => {
  const action = { type: "unknown" };
  const newState = authenticateReducer({}, action);

  expect(newState).toEqual({});
});
