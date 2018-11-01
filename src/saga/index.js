import { take, fork, put } from "redux-saga/effects";
import * as Action from "../actions/ActionTypes";

function* loginFlow() {
  while (true) {
    const request = yield take(Action.LOGIN_REQUEST);
    try {
      yield put({ type: Action.LOGIN_SUCCESS, payload: request.payload });
    } catch (e) {
      console.log(e);
    }
  }
}

export default function* rootSaga() {
  yield fork(loginFlow);
}
