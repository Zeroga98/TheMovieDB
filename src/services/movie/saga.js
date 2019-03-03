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
function* fetchDiscoverMovie(gender) {
  const data = yield fetch(`https://api.themoviedb.org/3/discover/movie?api_key=589b584b5b5bcf417930a5f9c2a8b142&language=es&sort_by=popularity.desc&page=1&with_genres=${gender.gender}`)
    .then(response => response.json())
    .catch(error => { return { state: 'ERROR', data: error } });

  if (!data.success) 
    yield put({ type: actions.GET_DISCOVER_MOVIES_SUCCESS, moviesDiscover: data });
  else
    yield put({ type: actions.GET_DISCOVER_MOVIES_FAILED, error: data })
}
function* fetchMovieId(movieId) {
  const data = yield fetch(`https://api.themoviedb.org/3/movie/${movieId.movieId}?api_key=589b584b5b5bcf417930a5f9c2a8b142&language=es`)
    .then(response => response.json())
    .catch(error => { return { state: 'ERROR', data: error } });

  if (!data.success) 
    yield put({ type: actions.GET_MOVIE_SUCCESS, movie: data });
  else
    yield put({ type: actions.GET_MOVIE_FAILED, error: data })
}
function* fetchRecommendationsMovies(movieId) {
  const data = yield fetch(`https://api.themoviedb.org/3/movie/${movieId.movieId}/recommendations?api_key=589b584b5b5bcf417930a5f9c2a8b142&language=en-US&page=1`)
    .then(response => response.json())
    .catch(error => { return { state: 'ERROR', data: error } });

  if (!data.success) 
    yield put({ type: actions.GET_RECOMMENDATIONS_MOVIES_SUCCESS, recommendationsMovies: data });
  else
    yield put({ type: actions.GET_RECOMMENDATIONS_MOVIES_FAILED, error: data })
}

function* ActionWatcher() {
  yield takeLatest(actions.GET_POPULAR_MOVIES, fetchMovie)
  yield takeLatest(actions.GET_MOVIE, fetchMovieId)
  yield takeLatest(actions.GET_DISCOVER_MOVIES, fetchDiscoverMovie)
  yield takeLatest(actions.GET_RECOMMENDATIONS_MOVIES, fetchRecommendationsMovies)
}


export default function* GetMovieSaga() {
  yield all([
    ActionWatcher(),
  ]);
}