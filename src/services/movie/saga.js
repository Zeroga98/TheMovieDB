import { put, takeLatest, all } from 'redux-saga/effects';

import * as actions from "./constanst";

function* fetchMovie() {
  const data = yield fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=589b584b5b5bcf417930a5f9c2a8b142&language=es&page=1`)
    .then(response => response.json())
    .catch(error => { return { state: 'ERROR', data: error } });

  if (!data.success) 
    yield put({ type: actions.GET_POPULAR_MOVIES_SUCCESS, movies: data });
  else
    yield put({ type: actions.GET_POPULAR_MOVIES_FAILED, error: data })
}
function* fetchDiscoverMovie() {
  const data = yield fetch(`https://api.themoviedb.org/3/discover/movie?api_key=589b584b5b5bcf417930a5f9c2a8b142&language=es&sort_by=popularity.desc&page=1&with_genres=10402`)
    .then(response => response.json())
    .catch(error => { return { state: 'ERROR', data: error } });

  if (!data.success) 
    yield put({ type: actions.GET_DISCOVER_MOVIES_SUCCESS, movies: data });
  else
    yield put({ type: actions.GET_DISCOVER_MOVIES_FAILED, error: data })
}

function* ActionWatcher() {
  yield takeLatest(actions.GET_POPULAR_MOVIES, fetchMovie)
  yield takeLatest(actions.GET_DISCOVER_MOVIES, fetchDiscoverMovie)
}


export default function* GetMovieSaga() {
  yield all([
    ActionWatcher(),
  ]);
}