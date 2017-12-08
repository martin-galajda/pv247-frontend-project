import { merge, uniqWith, sortBy, omit } from 'ramda'
import * as ACTION_TYPES from './action-types'
import { actionTypes as ALL_ACTION_TYPES } from '..'

const sortByCreatedAt = sortBy(message => new Date(message.createdAt).getTime())

const initialState = {
  channelMessages: {},
  fetchingChannelMessages: {},
}

const addChannelMessage = (channelMessages, newChannelMessages) => {
  if (!channelMessages) {
    channelMessages = []
  }

  return channelMessages.concat(newChannelMessages)
}

const removeChannelMessage = (channelMessages, messageId) =>
  channelMessages.filter(channelMessage => channelMessage.id !== messageId)

const updateChannelMessage = (channelMessages, updatedMessage) =>
  channelMessages.map(channelMessage => {
    if (channelMessage.id === updatedMessage.id) {
      return updatedMessage
    }
    return channelMessage
  })

const uniqMessages = messages => uniqWith((fstMessage, sndMessage) => fstMessage.id === sndMessage.id, messages)

const reducer = (state = initialState, action) => {
  let channelId
  let channelMessages

  switch (action.type) {
    case ACTION_TYPES.ADD_CHANNEL_MESSAGE_SUCCESS:
      channelId = action.payload.channelId
      return merge(state, {
        channelMessages: {
          [channelId]: uniqMessages(addChannelMessage(state.channelMessages[channelId], [omit(['channelId'], action.payload)])),
        },
      })
    case ACTION_TYPES.GET_CHANNEL_MESSAGES_SUCCESS:
      channelId = action.payload.channelId
      channelMessages = state.channelMessages[channelId]
      return merge(state, {
        channelMessages: {
          [channelId]: uniqMessages(addChannelMessage(channelMessages, sortByCreatedAt(action.payload.messages))),
        },
      })
    case ACTION_TYPES.REMOVE_MESSAGE_SUCCESS:
      channelId = action.payload.channelId
      return merge(state, {
        channelMessages: {
          [channelId]: removeChannelMessage(state.channelMessages[channelId], action.payload.messageId),
        },
      })
    case ACTION_TYPES.UPDATE_CHANNEL_MESSAGE_SUCCESS:
      channelId = action.payload.channelId
      return merge(state, {
        channelMessages: {
          [channelId]: updateChannelMessage(state.channelMessages[channelId], action.payload.message),
        },
      })
    case ALL_ACTION_TYPES.auth.LOGOUT:
      return initialState

    default:
      return state
  }
}

export default reducer
