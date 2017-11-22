import { merge, clone, uniqWith, sortBy } from 'ramda'
import * as ACTION_TYPES from './action-types'
import { decodeStrAsJSON } from '../../utils/encodeUtils'

const sortByCreatedAt = sortBy(message => new Date(message.createdAt).getTime())

const initialState = {
  channelMessages: {},
  fetchingChannelMessages: {},
  messagesFetchedFor: {},
}

const addChannelMessage = (channelMessages, newChannelMessages) => {
  if (!channelMessages) {
    channelMessages = []
  }

  const parsedMessages = []

  newChannelMessages.forEach(message => {
    const parsedMessage = clone(message)
    if (typeof parsedMessage.value === 'string') {
      parsedMessage.value = decodeStrAsJSON(parsedMessage.value)
    }

    parsedMessages.push(parsedMessage)
  })

  return channelMessages.concat(parsedMessages)
}

const uniqMessages = messages => uniqWith((fstMessage, sndMessage) => fstMessage.id === sndMessage.id, messages)

const reducer = (state = initialState, action) => {
  let channelId
  
  switch (action.type) {
    case ACTION_TYPES.ADD_CHANNEL_MESSAGE_SUCCESS:
      channelId = action.payload.channelId
      return merge(state, {
        channelMessages: {
          [channelId]: uniqMessages(addChannelMessage(state.channelMessages[channelId], [action.payload]))
        }
      })
    case ACTION_TYPES.GET_CHANNEL_MESSAGES_SUCCESS:
      channelId = action.payload.channelId
      return merge(state, {
        channelMessages: {
          [channelId]: uniqMessages(addChannelMessage(state.channelMessages[channelId], sortByCreatedAt(action.payload.messages)))
        }
      })
    default:
      return state
  }
}

export default reducer
