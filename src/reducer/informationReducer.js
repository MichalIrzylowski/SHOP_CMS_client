import { ADD_INFORMATION, REMOVE_INFORMATION } from "../actions/ActionTypes";

const defaultInformation = "";

export default (state = defaultInformation, action) => {
  switch (action.type) {
    case ADD_INFORMATION:
      return action.information;
    case REMOVE_INFORMATION:
      return defaultInformation;
    default:
      return state;
  }
};
