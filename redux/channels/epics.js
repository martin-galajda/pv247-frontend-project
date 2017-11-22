
import * as ACTION_TYPES from './action-types'
import {
  getChannelsSuccess,
  getChannelsFailure,
  requestGetChannels,

  addChannelSuccess,
  addChannelFailure,
  removeChannelSuccess,
  removeChannelFailure,
} from './actions'
import AppService from '../../services/api/AppService'
import { Observable } from 'rxjs'
import { actionTypes as ALL_ACTION_TYPES } from '..'

const onLoginSuccess = action$ => action$
  .ofType(ALL_ACTION_TYPES.user.REQUEST_GET_USER_DATA)
  .switchMap(action => {
    return Observable.of(requestGetChannels(action.payload.email))
  })

const getChannelsEpic = action$ => action$
  .ofType(ACTION_TYPES.REQUEST_GET_CHANNELS)
  .switchMap(action => {
    return Observable
      .fromPromise(AppService.getApplicationData())
      .map(response => getChannelsSuccess({
        ...response,
        email: action.payload,
      }))
      .catch(error => {
        return Observable.of(getChannelsFailure(error))
      })
  })

const addChannelsEpic = (action$, store) => action$
  .ofType(ACTION_TYPES.REQUEST_ADD_CHANNEL)
  .switchMap(action => {
    return Observable
      .fromPromise(AppService.addChannel(action.payload))
      .map(response => addChannelSuccess({
        ...response,
        email: store.getState().user.email,
      }))
      .catch(error => {
        return Observable.of(addChannelFailure(error))
      })
  })

const removeChannelsEpic = (action$, store) => action$
  .ofType(ACTION_TYPES.REQUEST_REMOVE_CHANNEL)
  .switchMap(action => {
    return Observable
      .fromPromise(AppService.removeChannel(action.payload.channelId))
      .map(response => removeChannelSuccess({
        ...response,
        email: store.getState().user.email,
      }))
      .catch(error => {
        return Observable.of(removeChannelFailure(error))
      })
  })


const epics = [
  getChannelsEpic,
  onLoginSuccess,
  addChannelsEpic,
  removeChannelsEpic,
]

export default epics
