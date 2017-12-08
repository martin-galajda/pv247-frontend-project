import UserService from '../../services/api/UserService'
import { routeChangeComplete$ } from '../../services/router-observable'
import * as ACTION_TYPES from './action-types'
import {
  getUserDataFailure,
  getUserDataSuccess,
  requestGetUserData,
  updateUserDataSuccess,
  updateUserDataFailure,
  checkRouteAuth,
  authChecked,
} from './actions'
import { actionTypes } from '..'
import { Observable } from 'rxjs'
import Router from 'next/router'

const loginSuccessEpic = action$ => action$
  .ofType(actionTypes.auth.LOGIN_SUCCESS)
  .switchMap(action => {
    const { accessToken, email } = action.payload
    localStorage.setItem('accessToken', accessToken)
    localStorage.setItem('userEmail', email)
    Router.push('/')

    return Observable.of(requestGetUserData(action.payload))
  })

const getUserDataEpic = action$ => action$
  .ofType(ACTION_TYPES.REQUEST_GET_USER_DATA)
  .switchMap(action => Observable
    .fromPromise(UserService.listUsers())
    .map(users => getUserDataSuccess({ users, currentUser: action.payload, path: action.path }))
    .catch(error => Observable.of(getUserDataFailure(error))))

const uploadUserDataEpic = action$ => action$
  .ofType(ACTION_TYPES.REQUEST_UPDATE_USER_DATA)
  .switchMap(action => Observable
    .fromPromise(UserService.updateUserCustomData(action.payload.email, action.payload.customData))
    .map(() => updateUserDataSuccess(action.payload.customData))
    .catch(error => Observable.of(updateUserDataFailure(error))))

const getUserDataSuccessEpic = action$ => action$
  .ofType(ACTION_TYPES.GET_USER_DATA_SUCCESS)
  .switchMap(action => Observable.of(checkRouteAuth({ path: action.path, hasValidAccessToken: true })))


const getUserDataFailureEpic = action$ => action$
  .ofType(ACTION_TYPES.GET_USER_DATA_FAILURE)
  .switchMap(action => Observable.of(checkRouteAuth({ path: action.path, hasValidAccessToken: false })))

const checkRouteEpic = action$ => action$
  .ofType(ACTION_TYPES.CHECK_ROUTE_AUTH)
  .switchMap(action => {
    let changingRoute = false
    const isPublicRoute = action.payload.path === '/login'

    if (!action.payload.hasValidAccessToken && !isPublicRoute) {
      changingRoute = true
      Router.push('/login')
    } else if (action.payload.hasValidAccessToken && isPublicRoute) {
      changingRoute = true
      Router.push('/')
    }

    const resolveAfterRouteChanges = new Promise(resolve => {
      if (!changingRoute) {
        resolve(authChecked(action.payload.hasValidAccessToken))
      }

      routeChangeComplete$
        .first()
        .subscribe(() => {
          resolve(authChecked(action.payload.hasValidAccessToken))
        })
    })

    return Observable.fromPromise(resolveAfterRouteChanges)
  })


const epics = [
  getUserDataEpic,
  getUserDataSuccessEpic,
  loginSuccessEpic,
  uploadUserDataEpic,
  getUserDataFailureEpic,
  checkRouteEpic,
]

export default epics
