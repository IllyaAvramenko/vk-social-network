// import * as axios from 'axios';
import jwtDecode from 'jwt-decode';

import { authAPI } from '../api/authAPI';
import setAuthToken from '../utils/setAuthToken';

const SET_CURRENT_USER = 'SET_CURRENT_USER',
      SET_REGISTRATION_ERROR = 'SET_REGISTRATION_ERROR',
      SET_LOGIN_ERROR = 'SET_LOGIN_ERROR',
      SET_REGISTRATION_SUCCESS = 'SET_REGISTRATION_SUCCESS',
      SET_LOADING = 'SET_LOADING';

const initialState = {
   isAuthenticated: false,
   user: {},
   isLoading: false,
   registrationFormError: null,
   registrationFormSuccess: null,
   loginFormError: null,
 };

const authReducer = (state = initialState, action) => {
   
  switch(action.type) {

      case SET_CURRENT_USER:
        return {
          ...state,
          isAuthenticated: Object.keys(action.payload).length !== 0,
          user: action.payload
        }

      case SET_REGISTRATION_ERROR:
        return { ...state, registrationFormError: action.errorText };
      
      case SET_LOGIN_ERROR:
        return { ...state, loginFormError: action.errorText };

      case SET_REGISTRATION_SUCCESS:
        return { ...state, registrationFormSuccess: action.successText };

      case SET_LOADING:
        return { ...state, isLoading: action.isLoading };

      default:
        return state;
  }

};


export const setCurrentUser = (user) => ({ type: SET_CURRENT_USER, payload: user });

const setError = (errorText) => ({ type: SET_REGISTRATION_ERROR, errorText });
const setLogError = (errorText) => ({ type: SET_LOGIN_ERROR, errorText });
const setSuccess = (successText) => ({ type: SET_REGISTRATION_SUCCESS, successText });
const setLoading = (isLoading) => ({ type: SET_LOADING, isLoading });

export const register = (userData) => (dispatch) => {
  dispatch(setLoading(true));
  authAPI.register(userData)
    .then(() => {
      dispatch(setSuccess('User have been created'));
      setTimeout(() => {dispatch(setSuccess(null))}, 10000)
    })
    .catch(error => {
      dispatch(setError(error.response.data.error));
      setTimeout(() => {dispatch(setError(null))}, 10000);
    })
    .finally(() => dispatch(setLoading(false)));
};

export const login = (userData) => (dispatch) => {
  dispatch(setLoading(true));
  authAPI.login(userData)
    .then(res => {
      const { token } = res.data
      localStorage.setItem('access_token', token)
      setAuthToken(token);
      const decoded = jwtDecode(token);
      dispatch(setCurrentUser(decoded));
    })
    .catch(error => {
      dispatch(setLogError(error.response.data.error));
      setTimeout(() => {dispatch(setLogError(null))}, 10000);
    })
    .finally(() => dispatch(setLoading(false)));
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('access_token');
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};

export default authReducer;