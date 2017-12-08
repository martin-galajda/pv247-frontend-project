import {
  MessageContainer,
  ImageContainer,
  MessageHeader,
  HeaderPart,
  MessagePart,
  ActionsContainer,
  IconContainer,
} from './styled'
import { convertFromRaw, EditorState } from 'draft-js'
import Editor from '../Editor'
import UserPhoto from '../UserPhoto'
import { branch, renderNothing } from 'recompose'
import LikeIcon from 'react-icons/lib/fa/thumbs-up'
import DislikeIcon from 'react-icons/lib/fa/thumbs-down'
import CloseIcon from 'react-icons/lib/fa/close'
import PropTypes from 'prop-types'

const HideableHeaderPart = branch(
  props => !props.show,
  renderNothing,
)(HeaderPart)

const HideableRemoveIcon = branch(
  props => !props.show,
  renderNothing,
)(CloseIcon)

const getMessageAuthor = user => {
  const firstPart = user.customData && user.customData.firstName
    ? user.customData.firstName
    : user.customData.email
  const secondPart = user.customData && user.customData.lastName
    ? user.customData.lastName
    : ''

  return `${firstPart} ${secondPart}`
}

const ChannelMessage = ({ isAuthor, author, value, withPicture, toggleLike, toggleDislike, id, removeMessage, ...restProps }) => (
  <MessageContainer>
    <HideableHeaderPart show={withPicture}>
      <ImageContainer>
        <UserPhoto user={author} />
      </ImageContainer>
      <MessageHeader>
        {getMessageAuthor(author)}
      </MessageHeader>
    </HideableHeaderPart>
    <MessagePart>
      <Editor
        editorState={EditorState.createWithContent(convertFromRaw(value.content))}
        onChange={() => {}}
        readOnly
      />
      <ActionsContainer className="actions">
        <IconContainer
          className={restProps.currentUserLiked ? 'like active' : 'like inactive'}
          onClick={() => toggleLike({ value, id })}
        >
          <LikeIcon />
          {restProps.likes}
        </IconContainer>
        <IconContainer
          className={restProps.currentUserDisliked ? 'dislike active' : 'dislike inactive'}
          onClick={() => toggleDislike({ value, id })}
        >
          <DislikeIcon />
          {restProps.dislikes}
        </IconContainer>
        <IconContainer className={'remove'}>
          <HideableRemoveIcon onClick={() => removeMessage(id)} show={isAuthor} />
        </IconContainer>
      </ActionsContainer>
    </MessagePart>
  </MessageContainer>
)

ChannelMessage.propTypes = {
  isAuthor: PropTypes.bool.isRequired,
  author: PropTypes.object.isRequired,
  value: PropTypes.object.isRequired,
  withPicture: PropTypes.bool.isRequired,
  toggleLike: PropTypes.func.isRequired,
  toggleDislike: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  removeMessage: PropTypes.func.isRequired,
  likes: PropTypes.number.isRequired,
  dislikes: PropTypes.number.isRequired,
}

HideableHeaderPart.propTypes = {
  show: PropTypes.bool.isRequired,
}

HideableRemoveIcon.propTypes = {
  show: PropTypes.bool.isRequired,
}


export default ChannelMessage
