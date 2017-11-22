import * as ACTION_TYPES from './action-types'

export const updateEditorState = (newState) => ({
  type: ACTION_TYPES.UPDATE_EDITOR_STATE,
  payload: newState,
})