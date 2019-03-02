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
export const getDiscoverMovies = () => ({
  type: actions.GET_DISCOVER_MOVIES
});

export const getDiscoverMoviesSuccess = (movies) => ({
  type: actions.GET_DISCOVER_MOVIES_SUCCESS,
  movies: movies
});

export const getDiscoverMoviesError = (error) => ({
  type: actions.GET_DISCOVER_MOVIES_FAILED,
  error: error
});
