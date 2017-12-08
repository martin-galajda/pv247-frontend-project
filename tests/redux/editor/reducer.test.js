import { actions as allActions, reducers as allReducers } from '../../../redux'
import { mergeDeepRight } from 'ramda'
import { EditorState, ContentState } from 'draft-js'

const reducer = allReducers.editor
const actions = allActions.editor
const channelMessagesActions = allActions.channelMessages

const initialState = {
  editorState: EditorState.createEmpty(),
}

describe('Editor reducer', () => {
  test('defines initial state', () => {
    expect(reducer(undefined, { type: 'unknown' })).toBeDefined()
  })

  test('updateEditorState action', () => {
    const newEditorContent = ContentState.createFromText('Blabla')
    const newEditorState = EditorState.createWithContent(newEditorContent)

    const newState = reducer(undefined, actions.updateEditorState(newEditorState))

    expect(newState).toEqual(mergeDeepRight(initialState, {
      editorState: newEditorState,
    }))
  })

  test('channelMessagesActions::requestAddChannelMessage action', () => {
    const newEditorContent = ContentState.createFromText('Blabla')
    const newEditorState = EditorState.createWithContent(newEditorContent)

    const reducerState = mergeDeepRight(initialState, {
      editorState: newEditorState,
    })
    const response = {}
    const channelId = '1'
    const newState = reducer(reducerState, channelMessagesActions.addChannelMessageSuccess(response, channelId))

    expect(newState.editorState).not.toEqual(reducerState.editorState)
  })
})
