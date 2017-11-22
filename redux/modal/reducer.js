import { merge } from 'ramda'
import * as ACTION_TYPES from './action-types'
import { MODAL_TYPES } from '../../constants'
const initialState = {
  openModals: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.OPEN_MODAL: 
    return merge(state, {
      openModals: state.openModals.concat([action.payload]),
    })

    case ACTION_TYPES.CLOSE_MODAL: 
    return merge(state, {
      openModals: state.openModals.filter(modalType => modalType !== action.payload),
    })
    default:
      return state
  }
}

export default reducer
