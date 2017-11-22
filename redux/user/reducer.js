import { merge } from 'ramda'
import * as ACTION_TYPES from './action-types'
import { decodeStrAsJSON } from '../../utils/encodeUtils'

const initialState = {
  email: null,
  customData: null,
  error: null,
  initialized: false,
  temporaryAvatarImageUrl: null,
}

const parseCustomDataString = customDataString => {
  return decodeStrAsJSON(customDataString)
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_USER_DATA_SUCCESS:
      return merge(state, {
        email: action.payload.email,
        customData: action.payload.customData ? parseCustomDataString(action.payload.customData) : null,
      })
    case ACTION_TYPES.GET_USER_DATA_FAILURE:
      return merge(state, {
        error: action.payload,
      })
    case ACTION_TYPES.USER_UPDATE_DATA_SUCCESS:
      return merge(state, {
        customData: action.payload,
      })

    case ACTION_TYPES.UPLOAD_AVATAR_IMAGE_URL:
      return merge(state, {
        temporaryAvatarImageUrl: action.payload,
      })
    default:
      return state
  }
}

export default reducer
