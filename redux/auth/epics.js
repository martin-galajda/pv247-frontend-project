import * as ACTION_TYPES from './action-types'
import {
    requestLogin,
    registerFailure,
    registerSuccess,
    loginSuccess,
    loginFailure,
} from './actions'
import UserService from '../../services/api/UserService'
import AuthService from '../../services/api/AuthService'
import { Observable } from 'rxjs'

const loginEpic = action$ => action$
    .ofType(ACTION_TYPES.REQUEST_LOGIN)
    .switchMap(action => {
        console.log(action)
        return Observable
            .fromPromise(AuthService.authenticateUser(action.payload.email, action.payload.password))
            .map(user => loginSuccess(user.accessToken, user.email))
            .catch(error => {
                console.log(error)
                return Observable.of(loginFailure(error))
            })
    })

const registerEpic = action$ => action$
    .ofType(ACTION_TYPES.REQUEST_REGISTER)
    .switchMap(action => {
        return Observable
            .fromPromise(UserService.registerUser(action.payload.email, action.payload.password))
            .map(response => registerSuccess(action.payload.email, action.payload.password))
            .catch(error => {
                console.log(error)
                return Observable.of(registerFailure(error))
            })
    })

const registerSuccessEpic = action$ => action$
    .ofType(ACTION_TYPES.REGISTER_SUCCESS)
    .switchMap(action => {
        return Observable
            .fromPromise(AuthService.authenticateUser(action.payload.email))
            .map((user) => loginSuccess(user.accessToken, user.email))
            .catch(error => {
                console.log(error)
                return Observable.of(loginFailure(error))
            })
    })


const epics = [
    loginEpic,
    registerEpic,
    registerSuccessEpic,
]
    
export default epics
