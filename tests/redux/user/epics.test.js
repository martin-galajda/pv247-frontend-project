import configureMockStore from 'redux-mock-store'
import { createEpicMiddleware } from 'redux-observable'
import config from '../../../config'
import { rootEpic, actions as allActions } from '../../../redux'
import flushHttpRequests from '../../helpers/flushHttpRequests'
import { encodeJSONAsStr } from '../../../utils/encodeUtils'
import fetchMock from 'fetch-mock'
import Chance from 'chance'
import { range } from 'ramda'

jest.mock('next/router')

const chance = new Chance()

const epicMiddleware = createEpicMiddleware(rootEpic)
const mockStore = configureMockStore([epicMiddleware])
const actions = allActions.user
const authActions = allActions.auth

const makeUser = () => ({
  email: chance.email(),
  customData: {},
})

describe('User epics', () => {
  let store

  beforeEach(() => {
    store = mockStore()
  })

  afterEach(() => {
    epicMiddleware.replaceEpic(rootEpic)
    fetchMock.restore()
  })

  describe('loginSuccess epic', () => {
    const email = 'example@example.com'
    const accessToken = 'accessToken'
    let apiResponse
    let users
    beforeEach(() => {
      users = range(1, 5).map(makeUser)
      users[0].email = email

      apiResponse = users.map(user => ({
        ...user,
        customData: encodeJSONAsStr(user.customData),
      }))

      const url = `${config.baseApiPath}${config.appId}/user`
      fetchMock.get(url, {
        body: JSON.stringify(apiResponse),
        status: 200,
        headers: {
          'Content-type': 'application/json',
        },
      })
    })

    beforeEach(() => {
      const channelsResponse = {
        id: 'id',
        channels: [],
      }
      const url = `${config.baseApiPath}app/${config.appId}`
      fetchMock.get(url, {
        body: JSON.stringify(channelsResponse),
        status: 200,
        headers: {
          'Content-type': 'application/json',
        },
      })
    })

    it('fetches user data on successfull login', async () => {
      const currentUserData = {
        email,
        accessToken,
      }
      store.dispatch(authActions.loginSuccess(currentUserData.accessToken, currentUserData.email))

      await flushHttpRequests()

      expect(store.getActions()).toEqual(expect.arrayContaining([
        authActions.loginSuccess(currentUserData.accessToken, currentUserData.email),
        actions.getUserDataSuccess({ users, path: undefined, currentUser: currentUserData }),
        actions.checkRouteAuth({ path: undefined, hasValidAccessToken: true }),
      ]))
    })
  })
})
