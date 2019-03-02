import { fork, all } from 'redux-saga/effects';
import GetMovieSaga from '../services/movie/saga';

export default function* rootSaga() {
    yield all([
        fork(GetMovieSaga),
    ]);
}