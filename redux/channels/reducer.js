import { merge } from 'ramda'
import * as ACTION_TYPES from './action-types'
import { decodeStrAsJSON } from '../../utils/encodeUtils'
import { actionTypes as ALL_ACTION_TYPES } from '..'

const initialState = {
  all: [],
  owning: [],
  member: [],
  error: null,
  updating: false,
}

const parseChannels = channels => {
  const parsed = channels.map(channel => ({
    ...channel,
    customData: decodeStrAsJSON(channel.customData),
  }))

  return parsed
}

const filterBeingMember = (userEmail, channels) => channels
  .filter(channel =>
    channel.customData.ownerEmail !== userEmail
    && channel.customData.invitees.some(email => email === userEmail))

const filterOwning = (userEmail, channels) => channels
  .filter(channel => channel.customData.ownerEmail === userEmail)

const reducer = (state = initialState, action) => {
  let channels

  switch (action.type) {
    case ACTION_TYPES.REQUEST_REPLACE_CHANNEL:
    case ACTION_TYPES.REQUEST_ADD_CHANNEL:
      return merge(state, {
        updating: true,
      })
    case ACTION_TYPES.GET_CHANNELS_SUCCESS:
    case ACTION_TYPES.ADD_CHANNEL_SUCCESS:
    case ACTION_TYPES.REMOVE_CHANNEL_SUCCESS:
    case ACTION_TYPES.REPLACE_CHANNEL_SUCCESS:
      channels = parseChannels(action.payload.channels)
      return merge(state, {
        all: channels,
        owning: filterOwning(action.payload.email, channels),
        member: filterBeingMember(action.payload.email, channels),
        updating: false,
      })

    case ACTION_TYPES.REPLACE_CHANNEL_FAILURE:
      return merge(state, {
        updating: false,
      })
    case ALL_ACTION_TYPES.auth.LOGOUT:
      return initialState

    default:
      return state
  }
}

export default reducer
