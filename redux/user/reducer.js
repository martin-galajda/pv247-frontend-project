import { mergeDeepRight } from 'ramda'
import * as ACTION_TYPES from './action-types'
import { actionTypes as ALL_ACTION_TYPES } from '../'

const initialState = {
  currentUser: {
    email: null,
    customData: null,
    temporaryAvatarImageUrl: null,
  },
  allUsers: null,
  error: null,
}

const getCurrentUser = (allUsers, currentUser) => allUsers.find(user => currentUser.email === user.email)

const reducer = (state = initialState, action) => {
  let currentUserData

  switch (action.type) {
    case ACTION_TYPES.GET_USER_DATA_SUCCESS:
      currentUserData = getCurrentUser(action.payload.users, action.payload.currentUser)
      return mergeDeepRight(state, {
        currentUser: currentUserData,
        allUsers: action.payload.users,
      })
    case ACTION_TYPES.GET_USER_DATA_FAILURE:
      return mergeDeepRight(state, {
        error: action.payload,
      })
    case ACTION_TYPES.USER_UPDATE_DATA_SUCCESS:
      return mergeDeepRight(state, {
        currentUser: {
          customData: action.payload,
        },
      })

    case ACTION_TYPES.UPLOAD_AVATAR_IMAGE_URL:
      return mergeDeepRight(state, {
        currentUser: {
          temporaryAvatarImageUrl: action.payload,
        },
      })
    case ALL_ACTION_TYPES.auth.LOGOUT:
      return initialState
    default:
      return state
  }
}

export default reducer
