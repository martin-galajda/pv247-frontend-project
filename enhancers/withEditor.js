import { connect } from 'react-redux'
import { actions } from '../redux'
import { compose, withHandlers, lifecycle } from 'recompose'
import { RichUtils, convertToRaw } from 'draft-js'
import { withRouter } from 'next/router'

export default compose(
  connect(state => ({
    editorState: state.editor.editorState,
  }), {
    onChange: actions.editor.updateEditorState,
    addChannelMessage: actions.channelMessages.requestAddChannelMessage,
  }),
  withRouter,
  withHandlers({
    postMessage: props => () => {
      const channelId = props.router.query.channelId
      const editorState = props.editorState
      const currentContent = editorState.getCurrentContent()

      const content = convertToRaw(currentContent)
      const customData = {
        upvotes: 0,
        downvotes: 0,
        reactions: [],
      }

      props.addChannelMessage({
        content,
        customData,
        channelId,
      })
    },
    insertNewLine: ({ onChange, editorState }) => () => {
      onChange(RichUtils.insertSoftNewline(editorState))      
    },
  })
)