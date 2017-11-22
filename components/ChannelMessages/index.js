

import { Container, EditorArea, MessagesArea} from './styled'
import Editor from '../../containers/Editor'
import ChannelMessage from '../ChannelMessage'

const ChannelMessages = ({ messages }) => (
  <Container>
    <MessagesArea>
      {messages.map((message, idx) => {
        return <ChannelMessage key={idx} {...message} />
      })}
    </MessagesArea>
  
    <EditorArea>
      <Editor />
    </EditorArea>
  </Container>
)

export default ChannelMessages
