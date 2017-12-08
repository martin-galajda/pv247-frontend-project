import { connect } from 'react-redux'
import { actions } from '../redux'
import { routeChange$ } from '../services/router-observable'
import { compose, lifecycle, mapProps, withHandlers } from 'recompose'
import { withRouter } from 'next/router'
import { mergeDeepRight } from 'ramda'

let subscribers = []

export default compose(
  withRouter,
  connect(state => ({
    messages: state.channelMessages.channelMessages,
    currentUserEmail: state.user.currentUser.email,
    users: state.user.allUsers,
  }), {
    getChannelMessages: actions.channelMessages.requestGetChannelMessages,
    updateChannelMessage: actions.channelMessages.requestUpdateChannelMessage,
    removeChannelMessage: actions.channelMessages.requestRemoveChannelMessage,
  }),
  mapProps(props => {
    const { messages, ...rest } = props
    const channelId = props.url.asPath.replace('/channels/', '')
    let channelMessages = messages[channelId] || []

    let lastCreatedBy
    channelMessages = channelMessages.map(channelMessage => {
      const messageCreatedBy = channelMessage.createdBy
      const upvotes = channelMessage.value.customData.upvotes
      const downvotes = channelMessage.value.customData.downvotes

      const currentUserLiked = upvotes.some(upvotedByEmail => upvotedByEmail === props.currentUserEmail)
      const currentUserDisliked = downvotes.some(downvotedByEmail => downvotedByEmail === props.currentUserEmail)

      const isAuthor = props.currentUserEmail === messageCreatedBy
      let withPicture = false

      if (messageCreatedBy !== lastCreatedBy) {
        lastCreatedBy = messageCreatedBy
        withPicture = true
      }

      const messageAuthor = props.users.find(user => user.email === messageCreatedBy)

      return {
        ...channelMessage,
        channelId,
        isAuthor,
        withPicture,
        currentUserLiked,
        currentUserDisliked,
        likes: upvotes.length,
        dislikes: downvotes.length,
        author: messageAuthor,
      }
    })

    return {
      messages: channelMessages,
      channelId,
      ...rest,
    }
  }),
  withHandlers({
    removeMessage: props => messageId => {
      props.removeChannelMessage(messageId, props.channelId)
    },
    toggleLike: props => messageData => {
      const alreadyLikedByCurrentUser = messageData.value.customData.upvotes
        .some(upvotedByEmail => upvotedByEmail === props.currentUserEmail)

      let upvotes
      if (alreadyLikedByCurrentUser) {
        upvotes = messageData
          .value.customData.upvotes.filter(upvotedByEmail => upvotedByEmail !== props.currentUserEmail)
      } else {
        upvotes = messageData.value.customData.upvotes.concat([props.currentUserEmail])
      }

      props.updateChannelMessage(mergeDeepRight(messageData, {
        value: {
          customData: {
            upvotes,
          },
        },
      }), props.channelId)
    },
    toggleDislike: props => messageData => {
      const alreadyDislikedByCurrentUser = messageData.value.customData.downvotes
        .some(downvotedByEmail => downvotedByEmail === props.currentUserEmail)

      let downvotes
      if (alreadyDislikedByCurrentUser) {
        downvotes = messageData
          .value.customData.downvotes.filter(downvotedByEmail => downvotedByEmail !== props.currentUserEmail)
      } else {
        downvotes = messageData.value.customData.downvotes.concat([props.currentUserEmail])
      }

      props.updateChannelMessage(mergeDeepRight(messageData, {
        value: {
          customData: {
            downvotes,
          },
        },
      }), props.channelId)
    },
  }),
)
