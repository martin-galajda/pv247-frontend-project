import * as ACTION_TYPES from './action-types'

export const requestLogin = (email, password) => ({
  type: ACTION_TYPES.REQUEST_LOGIN,
  payload: {
    email,
    password,
  },
})

export const loginSuccess = (accessToken, email) => ({
  type: ACTION_TYPES.LOGIN_SUCCESS,
  payload: {
    accessToken,
    email,
  },
})

export const loginFailure = error => ({
  type: ACTION_TYPES.LOGIN_FAILURE,
  payload: {
    error,
  },
})

export const requestRegister = (email, password) => ({
  type: ACTION_TYPES.REQUEST_REGISTER,
  payload: {
    email,
    password,
  },
})

export const registerSuccess = (email, password) => ({
  type: ACTION_TYPES.REGISTER_SUCCESS,
  payload: {
    email,
    password,
  },
})

export const registerFailure = error => ({
  type: ACTION_TYPES.REGISTER_FAILURE,
  payload: {
    error,
  },
})

export const logout = () => ({
  type: ACTION_TYPES.LOGOUT,
})

