import { merge } from 'ramda'
import * as ACTION_TYPES from './action-types'
import { actionTypes as allActionTypes } from '../'
import { decodeStrAsJSON } from '../../utils/encodeUtils'

const initialState = {
  all: [],
  owning: [],
  member: [],
  error: null,
}

const parseChannels = channels => {
  const parsed = channels.map(channel => {
    return {
      ...channel,
      customData: decodeStrAsJSON(channel.customData)
    }
  })

  return parsed
}

const filterBeingMember = (userEmail, channels) => channels
  .filter(channel => 
    channel.customData.ownerEmail !== userEmail &&
    channel.customData.invitees.some(email => email === userEmail)
  )

const filterOwning = (userEmail, channels) => channels
  .filter(channel => channel.customData.ownerEmail === userEmail)

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_CHANNELS_SUCCESS:
    case ACTION_TYPES.ADD_CHANNEL_SUCCESS:     
    case ACTION_TYPES.REMOVE_CHANNEL_SUCCESS:     
    case ACTION_TYPES.REPLACE_CHANNEL_SUCCESS:     
      const channels = parseChannels(action.payload.channels)
      return merge(state, {
        all: channels,
        owning: filterOwning(action.payload.email, channels),
        member: filterBeingMember(action.payload.email, channels),
      })
    default:
      return state
  }
}

export default reducer
