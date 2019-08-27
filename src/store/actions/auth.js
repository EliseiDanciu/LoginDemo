import * as actionTypes from './actionTypes';

export const authRequest = (email, password) => ({ type: actionTypes.AUTH_REQUEST, email, password });
export const authSuccess = (token) => ({ type: actionTypes.AUTH_SUCCESS, token });
export const authFailure = (error) => ({ type: actionTypes.AUTH_FAILURE, error });
export const logout = () => ({ type: actionTypes.LOGOUT });