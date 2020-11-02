import { data } from 'jquery';
import {
  DETAIL_PAGE_REQUEST,
  DETAIL_PAGE_SUCCESS,
  DETAIL_PAGE_FAILED,
} from './constant';
let initialState = {
  loadding: false,
  data: null,
  err: null,
};
const DetailMovieReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case DETAIL_PAGE_REQUEST:
      state.loadding = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case DETAIL_PAGE_SUCCESS:
      console.log(actions);
      state.loadding = false;
      state.data = actions.payload;
      state.err = null;
      return { ...state };
    case DETAIL_PAGE_FAILED:
      state.loadding = false;
      state.data = null;
      state.err = actions.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default DetailMovieReducer;
