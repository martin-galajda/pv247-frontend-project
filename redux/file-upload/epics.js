import * as ACTION_TYPES from './action-types'
import {
  uploadFileSuccess,
  uploadFileFailure,
  getUploadedFileUrlSuccess,
  getUploadedFileUrlFailure,
} from './actions'
import FileService from '../../services/api/FileService'
import { Observable } from 'rxjs'

const uploadFileEpic = action$ => action$
  .ofType(ACTION_TYPES.REQUEST_FILE_UPLOAD)
  .switchMap(action => {
    const formData = new FormData()
    formData.append('Files', action.payload.fileInput)

    return Observable
      .fromPromise(FileService.uploadFile(formData))
      .map(response => uploadFileSuccess(response, action.payload.actionCreatorOnSuccess))
      .catch(error => Observable.of(uploadFileFailure(error)))
  })

const getUploadedFileEpic = action$ => action$
  .ofType(ACTION_TYPES.FILE_UPLOAD_SUCCESS)
  .switchMap(action => {
    const uploadedFile = action.payload.uploadedFile

    return Observable
      .fromPromise(FileService.getFileDownloadLink(uploadedFile.id))
      .map(response => getUploadedFileUrlSuccess(response, action.payload.actionCreatorOnSuccess))
      .catch(error => Observable.of(getUploadedFileUrlFailure(error)))
  })

const getUploadedFileUrlEpic = action$ => action$
  .ofType(ACTION_TYPES.GET_UPLOADED_FILE_URL_SUCCESS)
  .switchMap(action => {
    const actionCreatorOnSuccess = action.payload.actionCreatorOnSuccess
    const fileUrl = action.payload.uploadedFileUrl

    return Observable.of(actionCreatorOnSuccess(fileUrl))
  })


const epics = [
  uploadFileEpic,
  getUploadedFileEpic,
  getUploadedFileUrlEpic,
]

export default epics
