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
      yield put({ type: Action.REMOVE_ERRORS });
      const response = yield call(api, "post", path, request.userData);
      console.log(response);
      const { id, login, token } = response.data;
      sessionStorage.setItem("token", token);
      yield put({ type: Action.AUTHENTICATE_SUCCESS });
      yield put({ type: Action.SET_CURRENT_USER, userData: { id, login } });
    } catch (error) {
      const message = error.response.data.error.message;
      yield put({ type: Action.AUTHENTICATE_FAIL });
      yield put({ type: Action.PUT_ERROR, error: message });
    }
  }
}

export default function* rootSaga() {
  yield fork(authenticateFlow);
}
