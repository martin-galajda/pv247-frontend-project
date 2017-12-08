import withChannelFormHandler from '../../enhancers/withChannelFormHandler'
import withSpinner from '../../enhancers/withSpinner'
import ManageChannelForm from '../../components/ManageChannelForm'

import { connect } from 'react-redux'
import { actions } from '../../redux'
import { compose, withProps, withState } from 'recompose'

export default compose(
  connect(null, {
    submitChannel: actions.channels.requestAddChannel,
  }),
  withState('invitees', 'updateInvitees', []),
  withProps({
    title: 'Add new channel',
  }),
  withChannelFormHandler,
  withSpinner,
)(ManageChannelForm)
