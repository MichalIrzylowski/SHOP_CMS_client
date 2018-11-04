import currentUserReducer from "../currentUserReducer";
import { SET_CURRENT_USER } from "../../actions/ActionTypes";

it("handles action of SET_CURRENT_USER type", () => {
  const action = {
    type: SET_CURRENT_USER,
    userData: { id: "123", login: "Heniu" }
  };

  const newState = currentUserReducer({}, action);

  expect(newState).toEqual({ id: "123", login: "Heniu" });
});

it("handles action of unknown type", () => {
  const action = { type: "unknown" };
  const newState = currentUserReducer({}, action);

  expect(newState).toEqual({});
});
