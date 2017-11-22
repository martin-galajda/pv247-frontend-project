import { MODAL_TYPES } from '../../constants'
import AddChannelModal from '../../components/AddChannelModal'
import withModal from '../../enhancers/withModal'
import { branch, renderNothing } from 'recompose'

const hideIfIsNotOpen = branch(
  props => !props.openModals.some(openModalType => openModalType === props.modalType),
  renderNothing
)
const HideableAddChannelModal = hideIfIsNotOpen(AddChannelModal)

const ModalContainer = ({ openModals, onClose }) => {
  return (
    <HideableAddChannelModal modalType={MODAL_TYPES.ADD_CHANNEL_MODAL}
      openModals={openModals}
      onClose={() => onClose(MODAL_TYPES.ADD_CHANNEL_MODAL)} 
    />
  )
}

export default withModal(ModalContainer)