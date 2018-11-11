import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import jwtDecode from "jwt-decode";

import rootSaga from "./saga";
import { PUT_ERROR, SET_CURRENT_USER } from "./actions/ActionTypes";
import { setAuthorizationHeader } from "./handlers/api";

const sagaMiddleware = createSagaMiddleware();

let middlewares = [sagaMiddleware];

if (process.env.NODE_ENV !== "production") {
  middlewares = [...middlewares, logger];
}

const middlewareSetup =
  process.env.NODE_ENV !== "production"
    ? composeWithDevTools(applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares);

export default ({ children, initialState = {} }) => {
  const store = createStore(reducer, initialState, middlewareSetup);

  if (sessionStorage.token) {
    setAuthorizationHeader(sessionStorage.token);
    try {
      store.dispatch({
        type: SET_CURRENT_USER,
        userData: jwtDecode(sessionStorage.token)
      });
    } catch (error) {
      store.dispatch({ type: PUT_ERROR, error });
    }
  }

  sagaMiddleware.run(rootSaga);

  return <Provider store={store}>{children}</Provider>;
};
