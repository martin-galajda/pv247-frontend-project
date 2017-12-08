import { actions as allActions, reducers as allReducers } from '../../../redux'

const reducer = allReducers.modal
const actions = allActions.modal

const initialState = {
  openModals: [],
  currentModalData: {},
}

describe('Modal reducer', () => {
  const modalData = {
    channelName: 'name',
    invitees: [],
  }

  test('defines initial state', () => {
    expect(reducer(undefined, { type: 'unknown' })).toEqual(initialState)
  })

  test('openModal action', () => {
    const newState = reducer(undefined, actions.openModal({
      modalType: 'ADD_CHANNEL',
      modalData,
    }))

    expect(newState).toEqual({
      openModals: ['ADD_CHANNEL'],
      currentModalData: {
        ADD_CHANNEL: modalData,
      },
    })
  })

  test('closeModal action', () => {
    const reducerState = {
      openModals: ['ADD_CHANNEL'],
      currentModalData: {
        ADD_CHANNEL: modalData,
      },
    }

    const newState = reducer(reducerState, actions.closeModal({
      modalType: 'ADD_CHANNEL',
    }))

    expect(newState).toEqual(initialState)
  })
})
