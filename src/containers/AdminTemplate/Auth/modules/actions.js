import {
  AUTH_PAGE_REQUEST,
  AUTH_PAGE_SUCCESS,
  AUTH_PAGE_FAILED,
} from './constants';
import Axios from 'axios';
export const actLoginAPI = () => {};

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
