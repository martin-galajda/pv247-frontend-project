import configureMockStore from 'redux-mock-store'
import { createEpicMiddleware } from 'redux-observable'
import config from '../../../config'
import { rootEpic, actions as allActions } from '../../../redux'
import flushHttpRequests from '../../helpers/flushHttpRequests'
import fetchMock from 'fetch-mock'

const epicMiddleware = createEpicMiddleware(rootEpic)
const mockStore = configureMockStore([epicMiddleware])
const actions = allActions.fileUpload

describe('FileUpload epics', () => {
  let store

  beforeEach(() => {
    store = mockStore()
  })

  afterEach(() => {
    epicMiddleware.replaceEpic(rootEpic)
    fetchMock.restore()
  })

  describe('uploadFile epic', () => {
    const payload = {
      fileInput: 'fileInput',
      actionCreatorOnSuccess: jest.fn(),
    }

    const fileMetadata = {
      id: 'some-made-up-id',
      name: 'string',
      extension: 'string',
      createdBy: 'string',
      fileSize: 0,
    }
    const fileUrl = 'https://s3-aws-eu.com/bucket/id'

    beforeEach(() => {
      const url = `${config.baseApiPath}file`
      fetchMock.post(url, {
        body: JSON.stringify([fileMetadata]),
        status: 200,
        headers: {
          'Content-type': 'application/json',
        },
      })
    })

    beforeEach(() => {
      const url = `${config.baseApiPath}file/${fileMetadata.id}/download-link`
      fetchMock.get(url, {
        body: JSON.stringify(fileUrl),
        status: 200,
        headers: {
          'Content-type': 'application/json',
        },
      })
    })

    it('successfully uploads file', async () => {
      store.dispatch(actions.requestUploadFile(payload))

      await flushHttpRequests()

      expect(store.getActions()).toEqual([
        actions.requestUploadFile(payload),
        actions.uploadFileSuccess([fileMetadata], payload.actionCreatorOnSuccess),
        actions.getUploadedFileUrlSuccess(fileUrl, payload.actionCreatorOnSuccess),
      ])

      expect(payload.actionCreatorOnSuccess).toBeCalled()
    })
  })
})
