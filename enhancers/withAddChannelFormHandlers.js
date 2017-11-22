import { connect } from 'react-redux'
import { actions } from '../redux'
import { reduxForm } from 'redux-form'
import { withHandlers, compose, withProps, withState } from 'recompose'

export default compose(
    connect(store => ({
      values: store.form && store.form.addChannel ? store.form.addChannel.values : null,
      user: store.user,
    }), {
      requestAddChannel: actions.channels.requestAddChannel,
    }),
    withState('invitees', 'updateInvitees', []),
    withHandlers({
      onRemoveInvitee: props => invitee => {
        props.updateInvitees(invitees => invitees.filter(selectedInvitee => selectedInvitee !== invitee))
      },
      onAddInvitee: props => invitee => {
        props.updateInvitees(invitees => invitees.concat([invitee]))
      },
      onSave: props => () => {
        props.requestAddChannel({
          customData: {
            ownerEmail: props.user.email,
            invitees: props.invitees,
          },
          name: props.values.name,
        })
        props.onSaveSuccess()
      },
      onCancel: props => () => {
        props.onSaveSuccess
      },
    }),
    reduxForm({
      form: 'addChannel',
    })
)