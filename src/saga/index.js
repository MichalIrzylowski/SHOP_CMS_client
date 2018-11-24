import { take, fork, call, put } from "redux-saga/effects";
import { delay } from "redux-saga";
import * as Action from "../actions/ActionTypes";
import {
  api,
  setAuthorizationHeader,
  sendImageToCloudinary
} from "../handlers/api";

function* authenticateFlow() {
  while (true) {
    const request = yield take(Action.AUTHENTICATE_REQUEST);
    const path = request.isRegister
      ? "/api/authenticate/register"
      : "/api/authenticate/login";
    try {
      yield put({ type: Action.REMOVE_ERRORS });
      const response = yield call(api, "post", path, request.userData);
      const { id, login, token } = response.data;
      sessionStorage.setItem("token", token);
      yield put({ type: Action.AUTHENTICATE_SUCCESS });
      yield put({ type: Action.SET_CURRENT_USER, userData: { id, login } });
      setAuthorizationHeader(token);
    } catch (error) {
      const message = error.response.data.error.message;
      yield put({ type: Action.AUTHENTICATE_FAIL });
      yield put({ type: Action.PUT_ERROR, error: message });
    }
  }
}

function* addItem() {
  while (true) {
    const request = yield take(Action.ADD_SHOP_ITEM);
    const path = "/api/shop/shop_item";
    try {
      setAuthorizationHeader(false);
      const imageURL = yield sendImageToCloudinary(request.data.picture);
      setAuthorizationHeader(sessionStorage.token);
      const image = imageURL.data.secure_url;
      const { name, description, price, category } = request.data;
      const response = yield call(api, "post", path, {
        name,
        description,
        image,
        price,
        category
      });
      yield put({ type: Action.ADD_SHOP_ITEM_SUCCESS, item: response.data });
      yield put({ type: Action.REMOVE_ERRORS });
      yield put({
        type: Action.ADD_INFORMATION,
        information: `Succesfuly added a ${response.data.name}`
      });
      yield call(delay, 5000);
      yield put({ type: Action.REMOVE_INFORMATION });
    } catch (error) {
      console.log(error.response);
      const message = error.response.data.error.message;
      yield put({ type: Action.ADD_SHOP_ITEM_FAIL });
      yield put({ type: Action.PUT_ERROR, error: message });
    }
  }
}

function* fetchShopItems() {
  while (true) {
    yield take(Action.FETCH_SHOP_ITEMS_REQUEST);
    const path = "/api/shop/shop_item";
    try {
      const response = yield call(api, "get", path);
      yield put({
        type: Action.FETCH_SHOP_ITEMS_SUCCESS,
        items: response.data
      });
    } catch (error) {
      const message = error.response.data.error.message;
      yield put({ type: Action.PUT_ERROR, error: message });
    }
  }
}

function* deleteShopItem() {
  while (true) {
    const request = yield take(Action.REMOVE_ITEM_REQUEST);
    const path = `/api/shop/shop_item/${request.id}`;
    try {
      yield call(api, "delete", path);
      yield put({ type: Action.REMOVE_ITEM_SUCCESS, id: request.id });
    } catch (error) {
      const message = error.response.data.error.message;
      yield put({ type: Action.PUT_ERROR, error: message });
    }
  }
}

function* updateItem() {
  while (true) {
    const request = yield take(Action.UPDATE_SHOP_ITEM);
    const path = `/api/shop/shop_item/${request.data.id}`;
    try {
      if (!request.data.picture.includes("https")) {
        setAuthorizationHeader(false);
        const imageURL = yield sendImageToCloudinary(request.data.picture);
        setAuthorizationHeader(sessionStorage.token);
        request.data.image = imageURL.data.secure_url;
      }
      const response = yield call(api, "put", path, request.data);
      yield put({
        type: Action.UPDATE_ITEM_SUCCESS,
        updatedItem: response.data
      });
      yield put({ type: Action.REMOVE_ERRORS });
      yield put({
        type: Action.ADD_INFORMATION,
        information: `Succesfuly updated a ${response.data.name}`
      });
      yield call(delay, 5000);
      yield put({ type: Action.REMOVE_INFORMATION });
    } catch (error) {
      const message = error.response.data.error.message;
      yield put({ type: Action.PUT_ERROR, error: message });
    }
  }
}

function* addMessage() {
  while (true) {
    const request = yield take(Action.ADD_MESSAGE_REQUEST);
    const path = "/api/messages/add_message";
    try {
      const response = yield call(api, "post", path, {
        message: request.message
      });
      yield put({ type: Action.ADD_MESSAGE_SUCCESS, message: response.data });
    } catch (error) {
      const message = error.response.data.error.message;
      yield put({ type: Action.PUT_ERROR, error: message });
    }
  }
}

function* loadMessages() {
  while (true) {
    yield take(Action.LOAD_MESSAGES);
    const path = "/api/messages";
    try {
      const response = yield call(api, "get", path);
      yield put({
        type: Action.LOAD_MESSAGES_SUCCESS,
        messages: response.data
      });
    } catch (error) {
      const message = error.response.data.error.message;
      yield put({ type: Action.PUT_ERROR, error: message });
    }
  }
}

export default function* rootSaga() {
  yield fork(authenticateFlow);
  yield fork(addItem);
  yield fork(fetchShopItems);
  yield fork(deleteShopItem);
  yield fork(updateItem);
  yield fork(addMessage);
  yield fork(loadMessages);
}
