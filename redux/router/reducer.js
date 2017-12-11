import { merge } from 'ramda'
import * as ACTION_TYPES from './action-types'

const initialState = {
  currentUrl: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.ROUTE_CHANGE_FINISH:
      return merge(state, {
        currentUrl: action.payload.url,
      })
    default:
      return state
  }
}

export default reducer
