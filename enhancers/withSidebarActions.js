import { connect } from 'react-redux'
import { actions } from '../redux'
import { withHandlers, compose, withProps } from 'recompose'
import { MODAL_TYPES } from '../constants'

export default compose(
  connect(store => ({
    channels: store.channels.owning.map(channel => ({
      ...channel,
      isOwner: true,
    })).concat(store.channels.member),
  }), {
    openModal: actions.modal.openModal,
    removeChannel : actions.channels.requestRemoveChannel,
  }),
  withHandlers({
    onAddChannel: props => () => {
      props.openModal(MODAL_TYPES.ADD_CHANNEL_MODAL)
    },
  }),
)