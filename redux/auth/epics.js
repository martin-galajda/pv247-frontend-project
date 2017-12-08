import * as ACTION_TYPES from './action-types'
import {
  registerFailure,
  registerSuccess,
  loginSuccess,
  loginFailure,
} from './actions'
import UserService from '../../services/api/UserService'
import AuthService from '../../services/api/AuthService'
import { Observable } from 'rxjs'
import Router from 'next/router'

const loginEpic = action$ => action$
  .ofType(ACTION_TYPES.REQUEST_LOGIN)
  .switchMap(action => {
    console.log(action)
    return Observable
      .fromPromise(AuthService.authenticateUser(action.payload.email, action.payload.password))
      .map(user => {
        console.log(user)
        return loginSuccess(user.accessToken, user.email)
      })
      .catch(error => {
        console.log(error)
        return Observable.of(loginFailure(error))
      })
  })

const registerEpic = action$ => action$
  .ofType(ACTION_TYPES.REQUEST_REGISTER)
  .switchMap(action => Observable
    .fromPromise(UserService.registerUser(action.payload.email, action.payload.password))
    .map(() => registerSuccess(action.payload.email, action.payload.password))
    .catch(error => {
      console.log(error)
      return Observable.of(registerFailure(error))
    }))

const registerSuccessEpic = action$ => action$
  .ofType(ACTION_TYPES.REGISTER_SUCCESS)
  .switchMap(action => Observable
    .fromPromise(AuthService.authenticateUser(action.payload.email))
    .map(user => loginSuccess(user.accessToken, user.email))
    .catch(error => {
      console.log(error)
      return Observable.of(loginFailure(error))
    }))

const logoutEpic = action$ => action$
  .ofType(ACTION_TYPES.LOGOUT)
  .do(() => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('userEmail')
    Router.push('/login')
  })
  .ignoreElements()


const epics = [
  loginEpic,
  registerEpic,
  registerSuccessEpic,
  logoutEpic,
]

export default epics
