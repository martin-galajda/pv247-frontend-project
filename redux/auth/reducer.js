import { merge } from 'ramda'
import * as ACTION_TYPES from './action-types'
import { actionTypes as ALL_ACTION_TYPES } from '..'

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoggingIn: false,
  accessToken: null,
  initialized: false,
  error: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.REQUEST_LOGIN:
      return merge(state, {
        isLoggingIn: true,
        isAuthenticated: false,
        user: null,
      })
    case ACTION_TYPES.LOGIN_SUCCESS:
      return merge(state, {
        isAuthenticated: true,
        isLoggingIn: false,
        accessToken: action.payload.accessToken,
        initialized: true,
      })
    case ACTION_TYPES.LOGIN_FAILURE:
      return merge(state, {
        isAuthenticated: false,
        isLoggingIn: false,
        error: action.payload.error,
      })
    case ACTION_TYPES.REGISTER_FAILURE:
      return merge(state, {
        isAuthenticated: false,
        isLoggingIn: false,
        error: action.payload.error,
      })
    case ALL_ACTION_TYPES.user.AUTH_CHECKED:
      return merge(state, {
        isAuthenticated: action.payload.hasValidAccessToken,
        initialized: true,
      })
    case ALL_ACTION_TYPES.router.ROUTE_CHANGE_FINISH:
      return merge(state, {
        error: null,
      })
    case ACTION_TYPES.LOGOUT:
      return initialState

    default:
      return state
  }
}

export default reducer
