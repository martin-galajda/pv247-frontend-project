import { actions as allActions, reducers as allReducers } from '../../../redux'
import { merge, clone, range } from 'ramda'
import Chance from 'chance'

const chance = new Chance()

const reducer = allReducers.channelMessages
const actions = allActions.channelMessages

const initialState = {
  channelMessages: {},
  fetchingChannelMessages: {},
}

const currentUserEmail = 'test@example.com'

const makeNewMessage = () => ({
  id: chance.string(),
  value: {
    content: chance.paragraph(),
    customData: {
      upvotes: [],
      downvotes: [],
    },
  },
  createdBy: currentUserEmail,
  createdAt: chance.date().toISOString(),
  customData: '',
})

describe('ChannelMessages reducer', () => {
  let channelMessages
  const channelId = '1'

  beforeEach(() => {
    channelMessages = []
    range(1, 20).forEach(() => {
      channelMessages.push(makeNewMessage())
    })
  })

  test('addChannelMessageSuccess action', () => {
    const channelMessage = channelMessages[0]

    expect(reducer(undefined, actions.addChannelMessageSuccess(channelMessage, channelId)))
      .toEqual(merge(initialState, {
        channelMessages: {
          [channelId]: [{
            ...channelMessage,
          }],
        },
      }))
  })


  test('addChannelMessageSuccess action', () => {
    expect(reducer(undefined, actions.getChannelMessagesSuccess(channelMessages, channelId)))
      .toEqual(merge(initialState, {
        channelMessages: {
          [channelId]: expect.arrayContaining(channelMessages),
        },
      }))
  })

  test('updateChannelMessageSuccess action', () => {
    const reducerState = merge(initialState, {
      channelMessages: {
        [channelId]: channelMessages,
      },
    })
    const updatedMessage = clone(channelMessages[0])
    updatedMessage.value.content = 'updated content'

    const newState = reducer(reducerState, actions.updateChannelMessageSuccess(updatedMessage, channelId))

    expect(newState.channelMessages[channelId]).toContainEqual(updatedMessage)
  })

  test('removeChannelMessageSuccess action', () => {
    const removedMessage = channelMessages[0]
    const reducerState = merge(initialState, {
      channelMessages: {
        [channelId]: channelMessages,
      },
    })

    const newState = reducer(reducerState, actions.removeChannelMessageSuccess(removedMessage.id, channelId))

    expect(newState.channelMessages[channelId]).not.toContainEqual(removedMessage)
  })
})
