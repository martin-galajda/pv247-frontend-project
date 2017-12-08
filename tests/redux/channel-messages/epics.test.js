import configureMockStore from 'redux-mock-store'
import { createEpicMiddleware } from 'redux-observable'
import config from '../../../config'
import { rootEpic, actions as allActions } from '../../../redux'
import flushHttpRequests from '../../helpers/flushHttpRequests'
import { encodeJSONAsStr, decodeStrAsJSON } from '../../../utils/encodeUtils'
import fetchMock from 'fetch-mock'
import { convertToRaw, ContentState } from 'draft-js'
import Chance from 'chance'
import { range } from 'ramda'
import moment from 'moment'

const chance = new Chance()

const epicMiddleware = createEpicMiddleware(rootEpic)
const mockStore = configureMockStore([epicMiddleware])
const actions = allActions.channelMessages

const makeNewMessage = () => ({
  content: convertToRaw(ContentState.createFromText(chance.paragraph())),
  customData: {
    upvotes: [],
    downvotes: [],
  },
})

const makeNewApiMessage = message => ({
  id: `${chance.integer()}`,
  value: encodeJSONAsStr({
    content: message.content,
    customData: message.customData,
  }),
  createdAt: '2017-12-03T18:45:16.695Z',
  createdBy: 'string',
  updatedAt: '2017-12-03T18:45:16.695Z',
  updatedBy: 'string',
  customData: '',
})

describe('ChannelMessages epics', () => {
  let store

  beforeEach(() => {
    store = mockStore()
  })

  afterEach(() => {
    epicMiddleware.replaceEpic(rootEpic)
    fetchMock.restore()
  })

  describe('requestAddChannelMessage epic', () => {
    const channelId = `${chance.integer()}`
    const message = makeNewMessage()
    const apiResponse = makeNewApiMessage(message)

    beforeEach(() => {
      const url = `${config.baseApiPath}app/${config.appId}/channel/${channelId}/message`
      fetchMock.post(url, {
        body: JSON.stringify(apiResponse),
        status: 200,
        headers: {
          'Content-type': 'application/json',
        },
      })
    })

    it('successfully adds channel message', async () => {
      store.dispatch(actions.requestAddChannelMessage({
        content: message.content,
        customData: message.customData,
        channelId,
      }))

      await flushHttpRequests()

      const expectedApiResponse = {
        ...apiResponse,
        value: decodeStrAsJSON(apiResponse.value),
      }

      expect(store.getActions()).toEqual([
        actions.requestAddChannelMessage({
          content: message.content,
          customData: message.customData,
          channelId,
        }),
        actions.addChannelMessageSuccess(expectedApiResponse, channelId),
      ])
    })
  })

  describe('requestGetChannelMessages epic', () => {
    const channelId = `${chance.integer()}`
    let messages
    let apiMessages

    beforeEach(() => {
      messages = []
      apiMessages = []

      range(1, 20).forEach(position => {
        const message = makeNewMessage()
        message.createdAt = moment(message.createdAt).add(position, 'days').toISOString()
        messages.push(message)
        apiMessages.push(makeNewApiMessage(message))
      })
    })

    beforeEach(() => {
      const url = `${config.baseApiPath}app/${config.appId}/channel/${channelId}/message`
      fetchMock.get(url, {
        body: JSON.stringify(apiMessages),
        status: 200,
        headers: {
          'Content-type': 'application/json',
        },
      })
    })

    it('successfully gets channel messages', async () => {
      store.dispatch(actions.requestGetChannelMessages(channelId))

      await flushHttpRequests()

      const expectedApiResponse = apiMessages.map(apiMessage => ({
        ...apiMessage,
        value: decodeStrAsJSON(apiMessage.value),
      }))

      expect(store.getActions()).toEqual([
        actions.requestGetChannelMessages(channelId),
        actions.getChannelMessagesSuccess(expectedApiResponse, channelId),
      ])
    })
  })

  describe('requestUpdateChannelMessage epic', () => {
    const channelId = `${chance.integer()}`
    const message = makeNewMessage()
    const apiResponse = makeNewApiMessage(message)

    beforeEach(() => {
      const url = `${config.baseApiPath}app/${config.appId}/channel/${channelId}/message/${message.id}`
      fetchMock.put(url, {
        body: JSON.stringify(apiResponse),
        status: 200,
        headers: {
          'Content-type': 'application/json',
        },
      })
    })

    it('successfully gets channel messages', async () => {
      const messageData = {
        value: message,
        customData: '',
      }
      store.dispatch(actions.requestUpdateChannelMessage(messageData, channelId))

      await flushHttpRequests()

      const expectedApiResponse = {
        ...apiResponse,
        value: decodeStrAsJSON(apiResponse.value),
      }

      expect(store.getActions()).toEqual([
        actions.requestUpdateChannelMessage(messageData, channelId),
        actions.updateChannelMessageSuccess(expectedApiResponse, channelId),
      ])
    })
  })

  describe('requestRemoveChannelMessage epic', () => {
    const channelId = `${Number(chance.integer())}`
    const messageId = `${Number(chance.integer())}`

    beforeEach(() => {
      const url = `${config.baseApiPath}app/${config.appId}/channel/${channelId}/message/${messageId}`
      fetchMock.delete(url, {
        status: 200,
      })
    })

    it('successfully removes channel messages', async () => {
      store.dispatch(actions.requestRemoveChannelMessage(messageId, channelId))

      await flushHttpRequests()

      expect(store.getActions()).toEqual([
        actions.requestRemoveChannelMessage(messageId, channelId),
        actions.removeChannelMessageSuccess(messageId, channelId),
      ])
    })
  })
})
