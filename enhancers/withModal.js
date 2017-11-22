import { connect } from 'react-redux'
import { compose } from 'recompose'
import { actions } from '../redux'

export default compose(
  connect(store => ({
    openModals: store.modal.openModals,
  }), {
    onClose: actions.modal.closeModal,
  }),
)