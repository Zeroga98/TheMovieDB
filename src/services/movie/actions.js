import * as actions from "./constanst";

export const getPupularMovies = () => ({
  type: actions.GET_POPULAR_MOVIES
});

export const getPupularMoviesSuccess = (movies) => ({
  type: actions.GET_POPULAR_MOVIES_SUCCESS,
  movies: movies
});

export const getPupularMoviesError = (error) => ({
  type: actions.GET_POPULAR_MOVIES_FAILED,
  error: error
});
export const getDiscoverMovies = (gender) => ({
  type: actions.GET_DISCOVER_MOVIES,
  gender: gender
});

export const getDiscoverMoviesSuccess = (moviesDiscover) => ({
  type: actions.GET_DISCOVER_MOVIES_SUCCESS,
  moviesDiscover: moviesDiscover
});

export const getDiscoverMoviesError = (error) => ({
  type: actions.GET_DISCOVER_MOVIES_FAILED,
  error: error
});
