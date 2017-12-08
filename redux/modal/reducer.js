import { merge, omit } from 'ramda'
import * as ACTION_TYPES from './action-types'
import { actionTypes as ALL_ACTION_TYPES } from '..'

const initialState = {
  openModals: [],
  currentModalData: {},
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.OPEN_MODAL:
      return merge(state, {
        openModals: state.openModals.concat([action.payload.modalType]),
        currentModalData: {
          ...state.currentModalData,
          [action.payload.modalType]: action.payload.modalData,
        },
      })

    case ACTION_TYPES.CLOSE_MODAL:
      return merge(state, {
        openModals: state.openModals.filter(modalType => modalType !== action.payload.modalType),
        currentModalData: omit([action.payload.modalType], state.currentModalData),
      })
    case ALL_ACTION_TYPES.auth.LOGOUT:
      return initialState
    default:
      return state
  }
}

export default reducer
