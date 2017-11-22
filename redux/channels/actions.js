import * as ACTION_TYPES from './action-types'

export const requestGetChannels = email => ({
  type: ACTION_TYPES.REQUEST_GET_CHANNELS,
  payload: email,
})

export const getChannelsSuccess = response => ({
  type: ACTION_TYPES.GET_CHANNELS_SUCCESS,
  payload: response,
})

export const getChannelsFailure = response => ({
  type: ACTION_TYPES.GET_CHANNELS_FAILURE,
  payload: response,
})

export const requestAddChannel = ({ customData, name }) => ({
  type: ACTION_TYPES.REQUEST_ADD_CHANNEL,
  payload: {
    name,
    customData,
  },
})

export const addChannelSuccess = response => ({
  type: ACTION_TYPES.ADD_CHANNEL_SUCCESS,
  payload: response,
})

export const addChannelFailure = response => ({
  type: ACTION_TYPES.ADD_CHANNEL_FAILURE,
  payload: response,
})

export const requestRemoveChannel = channelId => ({
  type: ACTION_TYPES.REQUEST_REMOVE_CHANNEL,
  payload: {
    channelId,
  },
})

export const removeChannelSuccess = response => ({
  type: ACTION_TYPES.REMOVE_CHANNEL_SUCCESS,
  payload: response,
})

export const removeChannelFailure = response => ({
  type: ACTION_TYPES.REMOVE_CHANNEL_FAILURE,
  payload: response,
})

export const requestReplaceChannel = channelData => ({
  type: ACTION_TYPES.REQUEST_REPLACE_CHANNEL,
  payload: channelData,
})

export const replaceChannelSuccess = response => ({
  type: ACTION_TYPES.REPLACE_CHANNEL_SUCCESS,
  payload: response,
})

export const replaceChannelFailure = response => ({
  type: ACTION_TYPES.REPLACE_CHANNEL_FAILURE,
  payload: response,
})
