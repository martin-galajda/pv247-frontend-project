import { actions as allActions, reducers as allReducers } from '../../../redux'
import { encodeJSONAsStr } from '../../../utils/encodeUtils'
import { merge, clone } from 'ramda'

const reducer = allReducers.channels
const actions = allActions.channels

const initialState = {
  all: [],
  owning: [],
  member: [],
  error: null,
  updating: false,
}

describe('Channels reducer', () => {
  const currentUserEmail = 'test@example.com'
  let channelData
  let channelsData

  beforeEach(() => {
    channelData = {
      customData: {
        ownerEmail: currentUserEmail,
        invitees: [],
      },
      name: 'Channel 1',
    }

    channelsData = [{
      ...channelData,
      id: '1',
    }, {
      customData: {
        ownerEmail: 'blabla@email.com',
        invitees: [currentUserEmail],
      },
      name: 'Channel 2',
      id: '2',
    }]
  })

  test('requestAddChannel action', () => {
    const noop = () => {}

    expect(reducer(undefined, actions.requestAddChannel({
      channelData,
      onFinish: noop,
    })))
      .toEqual(merge(initialState, {
        updating: true,
      }))
  })

  test('requestReplaceChannel action', () => {
    const noop = () => {}

    expect(reducer(undefined, actions.requestReplaceChannel({
      channelData,
      channelId: '1',
      onFinish: noop,
    })))
      .toEqual(merge(initialState, {
        updating: true,
      }))
  })

  test('getChannelsSuccess action', () => {
    const copyOfChannelsData = clone(channelsData)

    copyOfChannelsData.forEach(channel => {
      channel.customData = encodeJSONAsStr(channel.customData)
    })

    expect(reducer(undefined, actions.getChannelsSuccess({
      id: '1',
      channels: copyOfChannelsData,
      email: currentUserEmail,
    })))
      .toEqual(merge(initialState, {
        all: channelsData,
        owning: [channelsData[0]],
        member: [channelsData[1]],
        updating: false,
      }))
  })


  test('addChannelSuccess action', () => {
    const copyOfChannelsData = clone(channelsData)

    copyOfChannelsData.forEach(channel => {
      channel.customData = encodeJSONAsStr(channel.customData)
    })

    expect(reducer(undefined, actions.addChannelSuccess({
      id: '1',
      channels: copyOfChannelsData,
      email: currentUserEmail,
    })))
      .toEqual(merge(initialState, {
        all: channelsData,
        owning: [channelsData[0]],
        member: [channelsData[1]],
        updating: false,
      }))
  })

  test('removeChannelSuccess action', () => {
    const copyOfChannelsData = clone(channelsData)

    copyOfChannelsData.forEach(channel => {
      channel.customData = encodeJSONAsStr(channel.customData)
    })

    expect(reducer(undefined, actions.removeChannelSuccess({
      id: '1',
      channels: copyOfChannelsData,
    }, currentUserEmail)))
      .toEqual(merge(initialState, {
        all: channelsData,
        owning: [channelsData[0]],
        member: [channelsData[1]],
        updating: false,
      }))
  })

  test('replaceChannelSuccess action', () => {
    const copyOfChannelsData = clone(channelsData)

    copyOfChannelsData.forEach(channel => {
      channel.customData = encodeJSONAsStr(channel.customData)
    })

    expect(reducer(undefined, actions.replaceChannelSuccess({
      id: '1',
      channels: copyOfChannelsData,
    }, currentUserEmail)))
      .toEqual(merge(initialState, {
        all: channelsData,
        owning: [channelsData[0]],
        member: [channelsData[1]],
        updating: false,
      }))
  })
})
