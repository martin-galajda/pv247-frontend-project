
import * as ACTION_TYPES from './action-types'
import {
  getChannelsSuccess,
  getChannelsFailure,
  requestGetChannels,

  addChannelSuccess,
  addChannelFailure,
  removeChannelSuccess,
  removeChannelFailure,

  replaceChannelSuccess,
  replaceChannelFailure,
} from './actions'
import AppService from '../../services/api/AppService'
import { Observable } from 'rxjs'
import { actionTypes as ALL_ACTION_TYPES } from '..'

const onLoginSuccess = action$ => action$
  .ofType(ALL_ACTION_TYPES.user.REQUEST_GET_USER_DATA)
  .switchMap(action => Observable.of(requestGetChannels(action.payload.email)))

const getChannelsEpic = action$ => action$
  .ofType(ACTION_TYPES.REQUEST_GET_CHANNELS)
  .switchMap(action => Observable
    .fromPromise(AppService.getApplicationData())
    .map(response => getChannelsSuccess({
      ...response,
      email: action.payload,
    }))
    .catch(error => Observable.of(getChannelsFailure(error))))

const addChannelsEpic = action$ => action$
  .ofType(ACTION_TYPES.REQUEST_ADD_CHANNEL)
  .switchMap(action => Observable
    .fromPromise(AppService.addChannel(action.payload))
    .map(response => {
      action.onFinish()
      return addChannelSuccess({
        ...response,
        email: action.email,
      })
    })
    .catch(error => {
      action.onFinish()
      Observable.of(addChannelFailure(error))
    }))

const removeChannelsEpic = (action$, store) => action$
  .ofType(ACTION_TYPES.REQUEST_REMOVE_CHANNEL)
  .switchMap(action => Observable
    .fromPromise(AppService.removeChannel(action.payload.channelId))
    .map(response => removeChannelSuccess(
      response,
      store.getState().user.currentUser.email,
    ))
    .catch(error => Observable.of(removeChannelFailure(error))))

const updateChannelEpic = action$ => action$
  .ofType(ACTION_TYPES.REQUEST_REPLACE_CHANNEL)
  .switchMap(action => {
    const { channelId, channelData } = action.payload
    const email = action.email

    return Observable
      .fromPromise(AppService.replaceChannel(channelId, channelData))
      .map(response => {
        action.onFinish()
        return replaceChannelSuccess(response, email)
      })
      .catch(response => {
        action.onFinish()
        return Observable.of(replaceChannelFailure(response))
      })
  })


const epics = [
  getChannelsEpic,
  onLoginSuccess,
  addChannelsEpic,
  removeChannelsEpic,
  updateChannelEpic,
]

export default epics
