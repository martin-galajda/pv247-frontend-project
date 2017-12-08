import withChannelFormHandler from '../../enhancers/withChannelFormHandler'
import withSpinner from '../../enhancers/withSpinner'
import ManageChannelForm from '../../components/ManageChannelForm'

import { connect } from 'react-redux'
import { actions } from '../../redux'
import { compose, withProps, withStateHandlers } from 'recompose'

export default compose(
  connect((store, props) => {
    const channelData = store.channels.owning.find(channel => channel.id === props.modalData.channelId)

    return {
      initialValues: {
        name: channelData.name,
      },
      invitees: channelData.customData.invitees,
      channelId: channelData.id,
    }
  }, {
    submitChannel: actions.channels.requestReplaceChannel,
  }),
  withStateHandlers(
    ({ invitees }) => ({
      invitees,
    }),
    {
      updateInvitees: ({ invitees }) => updateCallback => ({
        invitees: updateCallback(invitees),
      }),
    },
  ),
  withProps({
    title: 'Edit channel',
  }),
  withChannelFormHandler,
  withSpinner,
)(ManageChannelForm)
