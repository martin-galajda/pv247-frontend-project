import { connect } from 'react-redux'
import { actions } from '../redux'
import { compose, withHandlers } from 'recompose'
import { RichUtils, convertToRaw } from 'draft-js'
import { withRouter } from 'next/router'

export default compose(
  connect(state => ({
    editorState: state.editor.editorState,
    user: state.user.currentUser,
  }), {
    onChange: actions.editor.updateEditorState,
    addChannelMessage: actions.channelMessages.requestAddChannelMessage,
  }),
  withRouter,
  withHandlers({
    postMessage: props => () => {
      const channelId = props.router.asPath.replace('/channels/', '')

      const editorState = props.editorState
      const currentContent = editorState.getCurrentContent()

      const content = convertToRaw(currentContent)
      const customData = {
        upvotes: [],
        downvotes: [],
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
  }),
)
