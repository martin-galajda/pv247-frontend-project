import configureMockStore from 'redux-mock-store'
import { createEpicMiddleware } from 'redux-observable'
import config from '../../../config'
import { rootEpic, actions as allActions } from '../../../redux'
import flushHttpRequests from '../../helpers/flushHttpRequests'
import fetchMock from 'fetch-mock'

const epicMiddleware = createEpicMiddleware(rootEpic)
const mockStore = configureMockStore([epicMiddleware])
const actions = allActions.auth

describe('Auth epics', () => {
  let store

  beforeEach(() => {
    store = mockStore()
  })

  afterEach(() => {
    epicMiddleware.replaceEpic(rootEpic)
    fetchMock.restore()
  })

  describe('loginEpic', () => {
    const email = 'test@example.com'
    const payload = {
      accessToken: 'accessToken',
      email,
    }

    beforeEach(() => {
      const url = `${config.baseApiPath}auth`
      fetchMock.post(url, {
        body: JSON.stringify(payload.accessToken),
        status: 200,
        headers: {
          'Content-type': 'application/json',
        },
      })
    })

    it('successfully logs user in', async () => {
      store.dispatch(actions.requestLogin(email, 'ignored 😨'))

      await flushHttpRequests()

      expect(store.getActions()).toEqual([
        actions.requestLogin(email, 'ignored 😨'),
        actions.loginSuccess(payload.accessToken, payload.email),
      ])

      expect(localStorage.getItem('accessToken')).toEqual(payload.accessToken)
      expect(localStorage.getItem('userEmail')).toEqual(email)
    })
  })

  describe('registerEpic', () => {
    const email = 'test@example.com'
    const payload = {
      accessToken: 'accessToken',
      email,
    }

    beforeEach(() => {
      // mock register API endpoint
      const url = `${config.baseApiPath}${config.appId}/user`
      fetchMock.post(url, {
        status: 200,
        body: JSON.stringify({ email, customData: null }),
        headers: {
          'Content-type': 'application/json',
        },
      })
    })

    beforeEach(() => {
      // mock login API endpoint
      const url = `${config.baseApiPath}auth`
      fetchMock.post(url, {
        body: JSON.stringify(payload.accessToken),
        status: 200,
        headers: {
          'Content-type': 'application/json',
        },
      })
    })

    it('registers user', async () => {
      const password = 'ignored 😨'
      store.dispatch(actions.requestRegister(email, password))

      await flushHttpRequests()

      expect(store.getActions()).toEqual([
        actions.requestRegister(email, password),
        actions.registerSuccess(email, password),
        actions.loginSuccess(payload.accessToken, payload.email),
      ])

      expect(localStorage.getItem('accessToken')).toEqual(payload.accessToken)
      expect(localStorage.getItem('userEmail')).toEqual(email)
    })
  })
})
