import * as ACTION_TYPES from './action-types'

export const requestUploadFile = ({ fileInput, actionCreatorOnSuccess }) => ({
  type: ACTION_TYPES.REQUEST_FILE_UPLOAD,
  payload: {
    fileInput,
    actionCreatorOnSuccess,
  },
})

export const uploadFileSuccess = (uploadedFiles, actionCreatorOnSuccess) => ({
  type: ACTION_TYPES.FILE_UPLOAD_SUCCESS,
  payload: {
    uploadedFile: uploadedFiles[0],
    actionCreatorOnSuccess,
  },
})

export const uploadFileFailure = response => ({
  type: ACTION_TYPES.FILE_UPLOAD_FAILURE,
  payload: response,
})

export const requestGetUploadedFileUrl = uuid => ({
  type: ACTION_TYPES.REQUEST_GET_UPLOADED_FILE_URL,
  payload: uuid,
})

export const getUploadedFileUrlSuccess = (uploadedFileUrl, actionCreatorOnSuccess) => ({
  type: ACTION_TYPES.GET_UPLOADED_FILE_URL_SUCCESS,
  payload: {
    uploadedFileUrl,
    actionCreatorOnSuccess,
  },
})

export const getUploadedFileUrlFailure = response => ({
  type: ACTION_TYPES.GET_UPLOADED_FILE_URL_FAILURE,
  payload: response,
})
