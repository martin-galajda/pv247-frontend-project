import { injectGlobal } from 'styled-components'
import Editor from 'draft-js-plugins-editor'
import draftStyles from 'draft-js/dist/Draft.css'
import PropTypes from 'prop-types'

import imagePluginStyles from 'draft-js-image-plugin/lib/plugin.css'
import hashtagPluginStyles from 'draft-js-hashtag-plugin/lib/plugin.css'
import linkifyPluginStyles from 'draft-js-linkify-plugin/lib/plugin.css'

import createImagePlugin from 'draft-js-image-plugin'
import createHashtagPlugin from 'draft-js-hashtag-plugin'
import createLinkifyPlugin from 'draft-js-linkify-plugin'

import { Container } from './styled'
import { handleKeyCommand, myKeyBindingFn } from './keybindings'

/* eslint-disable no-unused-expressions*/
injectGlobal`${draftStyles}`
injectGlobal`${imagePluginStyles}`
injectGlobal`${hashtagPluginStyles}`
injectGlobal`${linkifyPluginStyles}`
/* eslint-enable no-unused-expressions*/

const imagePlugin = createImagePlugin()
const hashtagPlugin = createHashtagPlugin()
const linkifyPlugin = createLinkifyPlugin()

const plugins = [
  imagePlugin,
  linkifyPlugin,
  hashtagPlugin,
]

const MessagesEditor = ({ readOnly, editorState, onChange, ...commandHandlers }) => (
  <Container className={readOnly ? 'readonly' : 'readwrite' }>
    <Editor
      editorState={editorState}
      onChange={onChange}
      plugins={plugins}
      handleKeyCommand={command => handleKeyCommand(command, commandHandlers)}
      keyBindingFn={myKeyBindingFn}
      readOnly={readOnly}
    />
  </Container>
)

MessagesEditor.propTypes = {
  readOnly: PropTypes.bool,
  editorState: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
}

MessagesEditor.defaultProps = {
  readOnly: false,
}

export default MessagesEditor
