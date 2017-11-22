import { MessageContainer, ImageContainer, MessageHeader, HeaderPart, MessagePart } from './styled'
import { convertFromRaw, EditorState } from 'draft-js'
import Editor from '../Editor'
import UserPhoto from '../UserPhoto'
import { branch, renderNothing } from 'recompose'


const HideableHeaderPart = branch(
  props => !props.show,
  renderNothing
)(HeaderPart)

const ChannelMessage = ({ value, withPicture }) => (
  <MessageContainer>
    <HideableHeaderPart show={withPicture}>
      <ImageContainer>
        <UserPhoto user={value.customData.createdBy} />
      </ImageContainer>
      <MessageHeader>
        {value.customData.createdBy.customData.firstName} {value.customData.createdBy.customData.lastName}
      </MessageHeader>
    </HideableHeaderPart>
    <MessagePart>
      <Editor
        editorState={EditorState.createWithContent(convertFromRaw(value.content))}
        onChange={() => {}}
        readOnly={true}
      />
    </MessagePart>
  </MessageContainer>
)

export default ChannelMessage
