import {
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_FAILED,
} from './constant';
let initialState = {
  loading: false,
  data: null,
  error: null,
};
const addUserReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_USER_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    case ADD_USER_SUCCESS:
      state.loading = false;
      state.data = actions.payload;
      state.error = null;
      return { ...state };
    case ADD_USER_FAILED:
      state.loading = false;
      state.data = null;
      state.error = actions.payload;
      return { ...state };
    default:
      return { ...state };
  }
};
export default addUserReducer;
