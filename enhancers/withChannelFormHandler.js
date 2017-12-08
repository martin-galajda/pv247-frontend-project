import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { withHandlers, compose } from 'recompose'

export default compose(
  connect(store => ({
    values: store.form && store.form.channel ? store.form.channel.values : null,
    user: store.user.currentUser,
    users: store.user.allUsers.map(user => ({
      name: user.email,
      id: user.email,
    })),
    isLoading: store.channels.updating,
  })),
  withHandlers({
    onRemoveInvitee: props => invitee => {
      props.updateInvitees(invitees => invitees.filter(selectedInvitee => selectedInvitee !== invitee))
    },
    onAddInvitee: props => invitee => {
      props.updateInvitees(invitees => invitees.concat([invitee]))
    },
    onSave: props => () => {
      props.submitChannel({
        channelData: {
          customData: {
            ownerEmail: props.user.email,
            invitees: props.invitees,
          },
          name: props.values.name,
        },
        channelId: props.channelId,
        onFinish: props.onSaveSuccess,
        email: props.user.email,
      })
    },
    onCancel: props => () => {
      props.onSaveSuccess()
    },
  }),
  reduxForm({
    form: 'channel',
  }),
)
