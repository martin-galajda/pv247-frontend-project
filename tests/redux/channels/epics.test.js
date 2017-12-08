import configureMockStore from 'redux-mock-store'
import { createEpicMiddleware } from 'redux-observable'
import config from '../../../config'
import { rootEpic, actions as allActions } from '../../../redux'
import flushHttpRequests from '../../helpers/flushHttpRequests'
import { encodeJSONAsStr } from '../../../utils/encodeUtils'
import fetchMock from 'fetch-mock'
import Chance from 'chance'
import { range } from 'ramda'

const chance = new Chance()

const epicMiddleware = createEpicMiddleware(rootEpic)
const mockStore = configureMockStore([epicMiddleware])
const actions = allActions.channels

const makeApiChannel = () => ({
  id: `${chance.natural()}`,
  name: chance.word(),
  customData: encodeJSONAsStr({
    invitees: [],
    ownerEmail: 'test@example.com',
  }),
})

const makeChannel = () => ({
  name: chance.word(),
  customData: {
    invitees: [],
    ownerEmail: 'test@example.com',
  },
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

  describe('requestGetChannels epic', () => {
    let apiResponse
    const email = 'some.email@example.com'

    beforeEach(() => {
      apiResponse = {
        id: `${chance.natural()}`,
        channels: [],
      }

      range(1, 5).forEach(() => {
        apiResponse.channels.push(makeApiChannel())
      })
    })

    beforeEach(() => {
      const url = `${config.baseApiPath}app/${config.appId}`
      fetchMock.get(url, {
        body: JSON.stringify(apiResponse),
        status: 200,
        headers: {
          'Content-type': 'application/json',
        },
      })
    })

    it('successfully gets channels', async () => {
      store.dispatch(actions.requestGetChannels(email))

      await flushHttpRequests()

      const expectedApiResponse = apiResponse

      expect(store.getActions()).toEqual([
        actions.requestGetChannels(email),
        actions.getChannelsSuccess({
          ...expectedApiResponse,
          email,
        }),
      ])
    })
  })

  describe('requestReplaceChannel epic', () => {
    let apiResponse
    let newChannel
    let newApiChannel
    const channelId = `${chance.natural()}`
    const email = 'some.email@example.com'

    beforeEach(() => {
      apiResponse = {
        id: `${chance.natural()}`,
        channels: [],
      }

      newChannel = makeChannel()
      newApiChannel = {
        ...newChannel,
        id: `${chance.natural()}`,
        customData: encodeJSONAsStr(newChannel.customData),
      }
      apiResponse = {
        id: `${chance.natural()}`,
        channels: [newApiChannel],
      }
    })

    beforeEach(() => {
      const url = `${config.baseApiPath}app/${config.appId}`
      fetchMock.patch(url, {
        body: JSON.stringify(apiResponse),
        status: 200,
        headers: {
          'Content-type': 'application/json',
        },
      })
    })

    it('successfully updates channel', async () => {
      const payload = {
        channelData: {
          name: newChannel.name,
          customData: newChannel.customData,
        },
        channelId,
        onFinish: jest.fn(),
        email,
      }

      store.dispatch(actions.requestReplaceChannel(payload))

      await flushHttpRequests()

      expect(store.getActions()).toEqual([
        actions.requestReplaceChannel(payload),
        actions.replaceChannelSuccess(apiResponse, email),
      ])
    })
  })

  describe('addChannels epic', () => {
    let apiResponse
    let newChannel
    let newApiChannel
    const email = 'some.email@example.com'

    beforeEach(() => {
      apiResponse = {
        id: `${chance.natural()}`,
        channels: [],
      }

      newChannel = makeChannel()
      newApiChannel = {
        ...newChannel,
        id: `${chance.natural()}`,
        customData: encodeJSONAsStr(newChannel.customData),
      }
      apiResponse = {
        id: `${chance.natural()}`,
        channels: [newApiChannel],
      }
    })

    beforeEach(() => {
      const url = `${config.baseApiPath}app/${config.appId}`
      fetchMock.patch(url, {
        body: JSON.stringify(apiResponse),
        status: 200,
        headers: {
          'Content-type': 'application/json',
        },
      })
    })

    it('successfully adds channel', async () => {
      const payload = {
        channelData: {
          name: newChannel.name,
          customData: newChannel.customData,
        },
        onFinish: jest.fn(),
        email,
      }

      store.dispatch(actions.requestAddChannel(payload))

      await flushHttpRequests()

      expect(store.getActions()).toEqual([
        actions.requestAddChannel(payload),
        actions.addChannelSuccess({
          ...apiResponse,
          email,
        }),
      ])
    })
  })
})
