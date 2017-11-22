import * as ACTION_TYPES from './action-types'

export const requestGetUserData = ({ path, ...user }) => ({
  type: ACTION_TYPES.REQUEST_GET_USER_DATA,
  payload: { 
    ...user,
  },
  path,  
})

export const getUserDataSuccess = (userData, path) => ({
  type: ACTION_TYPES.GET_USER_DATA_SUCCESS,
  payload: userData,
  path
})

export const checkRouteAuth = ({ path, hasValidAccessToken }) => ({
  type: ACTION_TYPES.CHECK_ROUTE_AUTH,
  payload: { path, hasValidAccessToken },
})

export const authChecked = hasValidAccessToken => ({
  type: ACTION_TYPES.AUTH_CHECKED,
  payload: { hasValidAccessToken },
})

export const getUserDataFailure = error => ({
  type: ACTION_TYPES.GET_USER_DATA_FAILURE,
  payload: error,
})

export const updateUserDataSuccess = userData => ({
  type: ACTION_TYPES.USER_UPDATE_DATA_SUCCESS,
  payload: userData,
})

export const updateUserDataFailure = error => ({
  type: ACTION_TYPES.USER_UPDATE_DATA_FAILURE,
  payload: error,
})

export const requestUpdateUserData = user => ({
  type: ACTION_TYPES.REQUEST_UPDATE_USER_DATA,
  payload: user,
})

export const updateUserAvatarImage = avatarImageUrl => ({
  type: ACTION_TYPES.UPLOAD_AVATAR_IMAGE_URL,
  payload: avatarImageUrl,
})