import { combineReducers } from 'redux';
// import ListMovieReducer from './ListMovieReducer';
import ListMovieReducer from '../../containers/HomeTemplate/ListMoviePage/modules/reducers';
import DetailMovieReducer from '../../containers/HomeTemplate/DetailPage/modules/reducers';
import authReducer from '../../containers/AdminTemplate/Auth/modules/reducers';
const rootReducer = combineReducers({
  ListMovieReducer,
  DetailMovieReducer,
  authReducer,
});
export default rootReducer;
