import * as actions from "./constanst";

const reducerMovies = (state = {}, action) => {
  switch (action.type) {
    case actions.GET_POPULAR_MOVIES:
      return { ...state, loading: true };
    case actions.GET_POPULAR_MOVIES_SUCCESS:
      return { ...state, loading: false, movies: action.movies };
    case actions.GET_POPULAR_MOVIES_FAILED:
      return { ...state, getPopularMovies: false, error: action.error };
    case actions.GET_DISCOVER_MOVIES:
      return { ...state, loading: true };
    case actions.GET_DISCOVER_MOVIES_SUCCESS:
      return { ...state, loading: false, moviesDiscover: action.moviesDiscover };
    case actions.GET_DISCOVER_MOVIES_FAILED:
      return { ...state, getPopularMovies: false, error: action.error };
    default:
      return state;
  }
};

export default reducerMovies;
