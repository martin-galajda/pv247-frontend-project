import { connect } from 'react-redux'
import { actions } from '../redux'
import { compose, lifecycle, mapProps } from 'recompose'
import { withRouter } from 'next/router'

export default compose(
  withRouter,  
  connect(state => ({
    messages: state.channelMessages.channelMessages,
  }), {
    getChannelMessages: actions.channelMessages.requestGetChannelMessages,
  }),
  lifecycle({
    componentWillMount: function(){
      const channelId = this.props.url.asPath.replace('/channels/', '')
      console.log(channelId)
      this.props.getChannelMessages(channelId)
    }
  }),
  mapProps(props => {
    const { messages, ...rest } = props
    const channelId = props.url.asPath.replace('/channels/', '')
    
    let channelMessages = messages[channelId] || []

    let lastCreatedBy
    channelMessages = channelMessages.map(channelMessage => {
      const messageCreatedBy = channelMessage.value.customData.createdBy.email
      
      if (messageCreatedBy !== lastCreatedBy) {
        lastCreatedBy = messageCreatedBy
        
        return {
          ...channelMessage,
          withPicture: true,
        }
      }

      return channelMessage
    })
    

    return {
      messages: channelMessages,
      ...rest,
    }
  }),
)
