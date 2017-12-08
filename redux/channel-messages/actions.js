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
    channelId,
  },
})

export const addChannelMessageFailure = (response, channelId) => ({
  type: ACTION_TYPES.ADD_CHANNEL_MESSAGE_FAILURE,
  payload: {
    ...response,
    channelId,
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
    channelId,
  },
})

export const getChannelMessagesFailure = (response, channelId) => ({
  type: ACTION_TYPES.GET_CHANNEL_MESSAGES_FAILURE,
  payload: {
    ...response,
    channelId,
  },
})

export const requestUpdateChannelMessage = (messageData, channelId) => ({
  type: ACTION_TYPES.REQUEST_UPDATE_CHANNEL_MESSAGE,
  payload: {
    messageData,
    channelId,
  },
})

export const updateChannelMessageSuccess = (response, channelId) => ({
  type: ACTION_TYPES.UPDATE_CHANNEL_MESSAGE_SUCCESS,
  payload: {
    message: response,
    channelId,
  },
})

export const updateChannelMessageFailure = (response, channelId) => ({
  type: ACTION_TYPES.UPDATE_CHANNEL_MESSAGE_FAILURE,
  payload: {
    ...response,
    channelId,
  },
})

export const requestRemoveChannelMessage = (messageId, channelId) => ({
  type: ACTION_TYPES.REQUEST_REMOVE_MESSAGE,
  payload: {
    messageId,
    channelId,
  },
})

export const removeChannelMessageSuccess = (messageId, channelId) => ({
  type: ACTION_TYPES.REMOVE_MESSAGE_SUCCESS,
  payload: {
    messageId,
    channelId,
  },
})

export const removeChannelMessageFailure = (response, channelId) => ({
  type: ACTION_TYPES.REMOVE_MESSAGE_FAILURE,
  payload: {
    ...response,
    channelId,
  },
})
