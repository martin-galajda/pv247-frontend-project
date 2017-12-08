import { connect } from 'react-redux'
import { compose } from 'recompose'
import { actions } from '../redux'

export default compose(connect(store => ({
  openModals: store.modal.openModals,
  modalData: store.modal.currentModalData,
}), {
  onClose: actions.modal.closeModal,
}))
