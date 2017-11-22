import * as ACTION_TYPES from './action-types'
import { merge } from 'ramda'
import { EditorState } from 'draft-js'
import { actionTypes as ALL_ACTION_TYPES } from '../../redux'

const initialState = {
  editorState: EditorState.createEmpty(),
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.UPDATE_EDITOR_STATE:
      return merge(state, {
        editorState: action.payload,
      })
    case ALL_ACTION_TYPES.channelMessages.ADD_CHANNEL_MESSAGE_SUCCESS:
      return merge(state, {
        editorState: EditorState.createEmpty()
      })

    default:
      return state
  }
}

export default reducer
