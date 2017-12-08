import { MODAL_TYPES } from '../../constants'
import ChannelFormModal from '../../components/ChannelFormModal'
import withModal from '../../enhancers/withModal'
import { branch, renderNothing } from 'recompose'
import PropTypes from 'prop-types'

const hideIfIsNotOpen = branch(
  props => !props.openModals.some(openModalType => openModalType === props.modalType),
  renderNothing,
)
const HideableChannelFormModal = hideIfIsNotOpen(ChannelFormModal)

const ModalContainer = ({ openModals, modalData, onClose }) => (
  <div>
    <HideableChannelFormModal
      modalType={MODAL_TYPES.ADD_CHANNEL_MODAL}
      openModals={openModals}
      modalData={modalData ? modalData[MODAL_TYPES.ADD_CHANNEL_MODAL] : null }
      onClose={() => onClose({ modalType: MODAL_TYPES.ADD_CHANNEL_MODAL })}
    />
    <HideableChannelFormModal
      modalType={MODAL_TYPES.EDIT_CHANNEL_MODAL}
      openModals={openModals}
      modalData={modalData ? modalData[MODAL_TYPES.EDIT_CHANNEL_MODAL] : null }
      onClose={() => onClose({ modalType: MODAL_TYPES.EDIT_CHANNEL_MODAL })}
    />
  </div>
)

ModalContainer.propTypes = {
  openModals: PropTypes.array.isRequired,
  modalData: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default withModal(ModalContainer)
