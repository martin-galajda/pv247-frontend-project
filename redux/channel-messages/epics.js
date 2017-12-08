import * as ACTION_TYPES from './action-types'
import { actionTypes as ALL_ACTION_TYPES } from '../'
import ChannelService from '../../services/api/ChannelService'
import { Observable } from 'rxjs'
import {
  addChannelMessageSuccess,
  addChannelMessageFailure,
  getChannelMessagesSuccess,
  getChannelMessagesFailure,
  updateChannelMessageSuccess,
  updateChannelMessageFailure,
  removeChannelMessageSuccess,
  removeChannelMessageFailure,
  requestGetChannelMessages,
} from './actions'

const requestAddChannelMessageEpic = action$ => action$
  .ofType(ACTION_TYPES.REQUEST_ADD_CHANNEL_MESSAGE)
  .switchMap(action => {
    const messageData = {
      value: action.payload.value,
    }

    const { channelId } = action.payload

    return Observable.fromPromise(ChannelService.addChannelMessage(channelId, messageData))
      .map(response => addChannelMessageSuccess(response, channelId))
      .catch(response => addChannelMessageFailure(response, channelId))
  })

const requestGetChannelMessagesEpic = action$ => action$
  .ofType(ACTION_TYPES.REQUEST_GET_CHANNEL_MESSAGES)
  .switchMap(action => {
    const channelId = action.payload

    return Observable.fromPromise(ChannelService.getChannelMessages(channelId))
      .map(response => getChannelMessagesSuccess(response, channelId))
      .catch(response => getChannelMessagesFailure(response, channelId))
  })

const requestUpdateChannelMessage = action$ => action$
  .ofType(ACTION_TYPES.REQUEST_UPDATE_CHANNEL_MESSAGE)
  .switchMap(action => {
    const channelId = action.payload.channelId
    const newMessageData = action.payload.messageData

    return Observable.fromPromise(ChannelService.updateChannelMessage(newMessageData, channelId))
      .map(response => updateChannelMessageSuccess(response, channelId))
      .catch(response => updateChannelMessageFailure(response, channelId))
  })

const requestRemoveChannelMessage = action$ => action$
  .ofType(ACTION_TYPES.REQUEST_REMOVE_MESSAGE)
  .switchMap(action => {
    const channelId = action.payload.channelId
    const messageId = action.payload.messageId

    return Observable.fromPromise(ChannelService.removeChannelMessage(channelId, messageId))
      .map(() => removeChannelMessageSuccess(messageId, channelId))
      .catch(response => removeChannelMessageFailure(response, channelId))
  })

const startPullingMessages = action$ => action$
  .ofType(ALL_ACTION_TYPES.router.ROUTE_CHANGE_START)
  .switchMap(action => {
    const url = action.payload.url

    const urlPartStart = /channels\//
    const uuidRegexp = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/
    const isChannelMessagesRoute = new RegExp(urlPartStart.source + uuidRegexp.source)

    if (isChannelMessagesRoute.test(url)) {
      const channelId = url.replace('/channels/', '')
      const pullMessagesPeriodically$ = Observable.interval(10000)
        .switchMap(() => Observable.of(requestGetChannelMessages(channelId)))

      return Observable
        .of(requestGetChannelMessages(channelId))
        .concat(pullMessagesPeriodically$)
    }

    return Observable.empty()
  })


const epics = [
  requestAddChannelMessageEpic,
  requestGetChannelMessagesEpic,
  requestUpdateChannelMessage,
  requestRemoveChannelMessage,
  startPullingMessages,
]

export default epics
