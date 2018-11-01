import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

let middlewares = [sagaMiddleware];

if (process.env.NODE_ENV !== "production") {
  middlewares = [...middlewares, logger];
}

const middlewareSetup =
  process.env.NODE_ENV !== "production"
    ? composeWithDevTools(applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares);

export default props => {
  const store = createStore(reducer, {}, middlewareSetup);

  sagaMiddleware.run(rootSaga);

  return <Provider store={store}>{props.children}</Provider>;
};
