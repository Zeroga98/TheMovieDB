import { combineReducers } from 'redux'
import reducerMovies from '../services/movie/reducer'

export default combineReducers({
   movies: reducerMovies,
})