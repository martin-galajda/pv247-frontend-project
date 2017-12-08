import { actions as allActions, reducers as allReducers } from '../../../redux'
import { merge } from 'ramda'

const reducer = allReducers.fileUpload
const actions = allActions.fileUpload

const initialState = {
  uploadedFile: null,
  uploadedFileUrl: null,
  isUploading: false,
  error: null,
}

describe('FileUpload reducers', () => {
  test('requestUploadFile action', () => {
    const payload = {
      fileInput: 'fileInput',
      actionCreatorOnSuccess: () => {},
    }
    expect(reducer(undefined, actions.requestUploadFile(payload)))
      .toEqual(merge(initialState, {
        isUploading: true,
      }))
  })

  test('uploadFileSuccess action', () => {
    const uploadedFiles = [{
      id: '1',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }]
    const noop = () => {}

    expect(reducer(undefined, actions.uploadFileSuccess(uploadedFiles, noop)))
      .toEqual(merge(initialState, {
        uploadedFile: uploadedFiles[0],
      }))
  })

  test('getUploadedFileUrlSuccess action', () => {
    const uploadedFileUrl = 'https://s3-aws-eu.com/bucket/id'
    const noop = () => {}

    expect(reducer(undefined, actions.getUploadedFileUrlSuccess(uploadedFileUrl, noop)))
      .toEqual(merge(initialState, {
        uploadedFileUrl,
        isUploading: false,
      }))
  })

  test('getUploadedFileUrlFailure action', () => {
    const error = 'Something went wrong'
    expect(reducer(undefined, actions.getUploadedFileUrlFailure(error)))
      .toEqual(merge(initialState, {
        error,
        isUploading: false,
      }))
  })
})
