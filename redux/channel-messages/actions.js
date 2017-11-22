// export const REQUEST_ADD_CHANNEL_MESSAGE = 'CHANNEL_MESSAGES/REQUEST_ADD_CHANNEL_MESSAGE'
// export const ADD_CHANNEL_MESSAGE_SUCCESS = 'CHANNEL_MESSAGES/ADD_CHANNEL_MESSAGE_SUCCESS'
// export const ADD_CHANNEL_MESSAGE_FAILURE = 'CHANNEL_MESSAGES/ADD_CHANNEL_MESSAGE_FAILURE'

// export const REQUEST_GET_CHANNEL_MESSAGES = 'CHANNEL_MESSAGES/REQUEST_GET_CHANNEL_MESSAGES'
// export const GET_CHANNEL_MESSAGES_SUCCESS = 'CHANNEL_MESSAGES/GET_CHANNEL_MESSAGES_SUCCESS'
// export const GET_CHANNEL_MESSAGES_FAILURE = 'CHANNEL_MESSAGES/GET_CHANNEL_MESSAGES_FAILURE'

// export const REQUEST_REMOVE_MESSAGE = 'CHANNEL_MESSAGES/REQUEST_REMOVE_MESSAGE'
// export const REMOVE_MESSAGE_SUCCESS = 'CHANNEL_MESSAGES/REMOVE_MESSAGE_SUCCESS'
// export const REMOVE_MESSAGE_FAILURE = 'CHANNEL_MESSAGES/REMOVE_MESSAGE_FAILURE'
import * as ACTION_TYPES from './action-types'

export const requestAddChannelMessage = ({ content, customData, channelId }) => ({
  type: ACTION_TYPES.REQUEST_ADD_CHANNEL_MESSAGE,
  payload: {
    value: {
      content,
      customData,
    },
    channelId,
  },
})

export const addChannelMessageSuccess = (response, channelId) => ({
  type: ACTION_TYPES.ADD_CHANNEL_MESSAGE_SUCCESS,
  payload: {
    ...response,
    channelId
  }
})

export const addChannelMessageFailure = (response, channelId) => ({
  type: ACTION_TYPES.ADD_CHANNEL_MESSAGE_FAILURE,
  payload: {
    ...response,
    channelId
  },
})

export const requestGetChannelMessages = channelId => ({
  type: ACTION_TYPES.REQUEST_GET_CHANNEL_MESSAGES,
  payload: channelId,
})

export const getChannelMessagesSuccess = (response, channelId) => ({
  type: ACTION_TYPES.GET_CHANNEL_MESSAGES_SUCCESS,
  payload: {
    messages: response,
    channelId
  }
})

export const getChannelMessagesFailure = (response, channelId) => ({
  type: ACTION_TYPES.GET_CHANNEL_MESSAGES_FAILURE,
  payload: {
    ...response,
    channelId
  },
})