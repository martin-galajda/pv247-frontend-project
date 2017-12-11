import { actions as allActions, reducers as allReducers } from '../../../redux'

const reducer = allReducers.auth
const actions = allActions.auth
const userActions = allActions.user

describe('Auth reducers', () => {
  test('requestLogin action', () => {
    const email = 'test@email.com'
    const password = 'secure'

    expect(reducer(undefined, actions.requestLogin(email, password)))
      .toEqual({
        user: null,
        isLoggingIn: true,
        isAuthenticated: false,
        accessToken: null,
        initialized: false,
        error: null,
      })
  })

  test('loginSuccess action', () => {
    const accessToken = 'x.y.z'
    const email = 'test@email.com'

    expect(reducer(undefined, actions.loginSuccess(accessToken, email)))
      .toEqual({
        user: null,
        isLoggingIn: false,
        isAuthenticated: true,
        accessToken,
        initialized: true,
        error: null,
      })
  })

  test('loginFailure action', () => {
    expect(reducer(undefined, actions.loginFailure('Invalid email')))
      .toEqual({
        user: null,
        isLoggingIn: false,
        isAuthenticated: false,
        accessToken: null,
        initialized: false,
        error: 'Invalid email',
      })
  })

  test('registerFailure action', () => {
    expect(reducer(undefined, actions.registerFailure('Invalid email')))
      .toEqual({
        user: null,
        isLoggingIn: false,
        isAuthenticated: false,
        accessToken: null,
        initialized: false,
        error: 'Invalid email',
      })
  })

  test('authChecked action', () => {
    const hasValidAccessToken = true
    expect(reducer(undefined, userActions.authChecked(hasValidAccessToken)))
      .toEqual({
        user: null,
        isLoggingIn: false,
        isAuthenticated: hasValidAccessToken,
        accessToken: null,
        initialized: true,
        error: null,
      })
  })

  test('logout action', () => {
    expect(reducer(undefined, actions.logout()))
      .toEqual({
        user: null,
        isLoggingIn: false,
        isAuthenticated: false,
        accessToken: null,
        initialized: false,
        error: null,
      })
  })
})
