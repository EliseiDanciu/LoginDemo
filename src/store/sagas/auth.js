import { put, call, fork, cancel, take } from 'redux-saga/effects';
import * as actions from '../actions';
import * as actionTypes from '../actions/actionTypes';
import axios from 'axios';

function* loginSaga(email, password) {
    let url = 'https://reqres.in/api/login';
    try {
        const response = yield call(axios.post, url, { email, password });
        yield call(saveTokenToLocalStorage, response.data.token);
        yield put(actions.authSuccess(response.data.token));
    } catch (error) {
        yield put(actions.authFailure(error));
    }
}

function* saveTokenToLocalStorage(token) {
    yield call([localStorage, "setItem"], 'token', token);
}

function* clearTokenFromLocalStorage() {
    yield call([localStorage, "removeItem"], 'token');
}

export default function* watchAuth() {
    while (true) {
        const { email, password } = yield take(actionTypes.AUTH_REQUEST);
        const loginTask = yield fork(loginSaga, email, password);
        yield take(actionTypes.LOGOUT);
        yield cancel(loginTask);
        yield call(clearTokenFromLocalStorage);
    }
}

