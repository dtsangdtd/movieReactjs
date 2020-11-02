import {
  AUTH_PAGE_REQUEST,
  AUTH_PAGE_SUCCESS,
  AUTH_PAGE_FAILED,
} from './constants';
import Axios from 'axios';
export const actLoginAPI = (user) => {
  return (dispatch) => {
    dispatch(actLoginRequest());
    // console.log(user);
    Axios({
      url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
      method: 'POST',
      data: user,
    })
      .then((result) => {
        dispatch(actLoginSuccess(result));
        console.log(result);
      })
      .catch((err) => {
        dispatch(actLoginFailed(err));
      });
  };
};

const actLoginRequest = () => {
  return {
    type: AUTH_PAGE_REQUEST,
  };
};
const actLoginSuccess = (data) => {
  return {
    type: AUTH_PAGE_SUCCESS,
    payload: data,
  };
};
const actLoginFailed = (err) => {
  return {
    type: AUTH_PAGE_FAILED,
    payload: err,
  };
};
