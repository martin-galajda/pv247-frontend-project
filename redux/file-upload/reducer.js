import { merge } from 'ramda'
import * as ACTION_TYPES from './action-types'
import { actionTypes as ALL_ACTION_TYPES } from '..'

const initialState = {
  uploadedFile: null,
  uploadedFileUrl: null,
  isUploading: false,
  error: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.REQUEST_FILE_UPLOAD:
      return merge(state, {
        isUploading: true,
      })

    case ACTION_TYPES.FILE_UPLOAD_SUCCESS:
      return merge(state, {
        uploadedFile: action.payload.uploadedFile,
      })

    case ACTION_TYPES.GET_UPLOADED_FILE_URL_SUCCESS:
      return merge(state, {
        uploadedFileUrl: action.payload.uploadedFileUrl,
        isUploading: false,
      })

    case ACTION_TYPES.GET_UPLOADED_FILE_URL_FAILURE:
      return merge(state, {
        error: action.payload,
        isUploading: false,
      })

    case ACTION_TYPES.FILE_UPLOAD_FAILURE:
      return merge(state, {
        error: action.payload,
      })

    case ALL_ACTION_TYPES.auth.LOGOUT:
      return initialState

    default:
      return state
  }
}

export default reducer
