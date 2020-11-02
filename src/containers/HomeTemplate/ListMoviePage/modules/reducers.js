import {
  LIST_MOVIE_REQUEST,
  LIST_MOVIE_SUCCESS,
  LIST_MOVIE_FAILED,
} from './constant';
let initialState = {
  loadding: false,
  data: null,
  err: null,
};
const ListMovieReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case LIST_MOVIE_REQUEST:
      state.loadding = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case LIST_MOVIE_SUCCESS:
      state.loadding = false;
      state.data = actions.payload;
      state.err = null;
      return { ...state };

    case LIST_MOVIE_FAILED:
      state.loadding = false;
      state.data = null;
      state.err = actions.payload;
      return { ...state };

    default:
      return { ...state };
  }
};
export default ListMovieReducer;
