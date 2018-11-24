import {
  LOAD_MESSAGES_SUCCESS,
  ADD_MESSAGE_SUCCESS
} from "../actions/ActionTypes";

const defaultState = [];

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_MESSAGES_SUCCESS:
      return action.messages;
    case ADD_MESSAGE_SUCCESS:
      return [...state.messages, action.message];
    default:
      return state;
  }
};
