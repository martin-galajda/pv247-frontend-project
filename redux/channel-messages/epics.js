import * as ACTION_TYPES from './action-types'
import ChannelService from '../../services/api/ChannelService'
import { Observable } from 'rxjs'
import { mergeDeepLeft, omit } from 'ramda'
import { 
  addChannelMessageSuccess,
  addChannelMessageFailure,
  getChannelMessagesSuccess,
  getChannelMessagesFailure
} from './actions'
import { addChannelFailure } from '../channels/actions';

const requestAddChannelMessageEpic = (action$, store) => action$
  .ofType(ACTION_TYPES.REQUEST_ADD_CHANNEL_MESSAGE)
  .switchMap(action => {
    const user = store.getState().user
    const messageData = {
      value: action.payload.value,
    }
    messageData.value.customData.createdBy = { 
      email: user.email,
      customData: user.customData,
    }

    const { channelId } = action.payload

    return Observable.fromPromise(ChannelService.addChannelMessage(channelId, messageData))
      .map(response => addChannelMessageSuccess(response, channelId))
      .catch(response => addChannelFailure(response, channelId))
  })

const requestGetChannelMessages = action$ => action$
  .ofType(ACTION_TYPES.REQUEST_GET_CHANNEL_MESSAGES)
  .switchMap(action => {
    const channelId = action.payload

    return Observable.fromPromise(ChannelService.getChannelMessages(channelId))
      .map(response => getChannelMessagesSuccess(response, channelId))
      .catch(response => getChannelMessagesFailure(response, channelId))
  })

const epics = [
  requestAddChannelMessageEpic,
  requestGetChannelMessages,
]

export default epics