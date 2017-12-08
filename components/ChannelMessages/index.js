
import PropTypes from 'prop-types'
import { Container, EditorArea, MessagesArea } from './styled'
import Editor from '../../containers/Editor'
import ChannelMessage from '../ChannelMessage'

const ChannelMessages = ({ messages, toggleLike, removeMessage, toggleDislike }) => (
  <Container>
    <MessagesArea>
      {messages.map((message, idx) => (<ChannelMessage
        key={idx}
        {...message}
        toggleDislike={toggleDislike}
        toggleLike={toggleLike}
        removeMessage={removeMessage}
      />))}
    </MessagesArea>

    <EditorArea>
      <Editor />
    </EditorArea>
  </Container>
)

ChannelMessages.propTypes = {
  messages: PropTypes.array.isRequired,
  toggleLike: PropTypes.func.isRequired,
  toggleDislike: PropTypes.func.isRequired,
  removeMessage: PropTypes.func.isRequired,
}


export default ChannelMessages
