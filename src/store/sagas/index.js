import { all } from 'redux-saga/effects';
import watchAuthSaga from './auth';


export default function* rootSaga() {
    yield all([
        yield watchAuthSaga()
    ]);
}