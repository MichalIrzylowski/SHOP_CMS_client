import { take, fork, call, put } from "redux-saga/effects";
import * as Action from "../actions/ActionTypes";
import { api } from "../handlers/api";

function* authenticateFlow() {
  while (true) {
    const request = yield take(Action.AUTHENTICATE_REQUEST);
    const path = request.isRegister
      ? "/api/authenticate/register"
      : "/api/authenticate/login";
    try {
      const response = yield call(api, "post", path, request.userData);
      const { id, login, token } = response.data;
      sessionStorage.setItem("token", token);
      yield put({ type: Action.AUTHENTICATE_SUCCESS });
      yield put({ type: Action.SET_CURRENT_USER, userData: { id, login } });
    } catch (error) {
      yield put({ type: Action.AUTHENTICATE_FAIL });
    }
  }
}

export default function* rootSaga() {
  yield fork(authenticateFlow);
}
