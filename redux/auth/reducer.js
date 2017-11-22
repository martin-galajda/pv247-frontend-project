import { merge } from 'ramda'
import * as ACTION_TYPES from './action-types'
import { actionTypes as allActionTypes } from '../'

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoggingIn: false,
  accessToken: null,
  initialized: false,
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
        initialized: true,
      })
    case allActionTypes.user.AUTH_CHECKED:
      return merge(state, {
        isAuthenticated: action.payload.hasValidAccessToken,
        initialized: true,
      })
    default:
      return state
  }
}

export default reducer
