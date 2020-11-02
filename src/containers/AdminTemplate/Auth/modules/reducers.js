import {
  AUTH_PAGE_REQUEST,
  AUTH_PAGE_SUCCESS,
  AUTH_PAGE_FAILED,
} from './constants';
let initialState = {
  loadding: false,
  data: null,
  err: null,
};
const authReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case AUTH_PAGE_REQUEST:
      state.loadding = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case AUTH_PAGE_SUCCESS:
      state.loadding = false;
      state.data = actions.payload;
      state.err = null;
      return { ...state };
    case AUTH_PAGE_FAILED:
      state.loadding = false;
      state.data = null;
      state.err = actions.payload;
      return { ...state };

    default:
      return { ...state };
  }
};
export default authReducer;
