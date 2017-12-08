import Modal from 'react-modal'
import AddChannelForm from '../../containers/AddChannelForm'
import EditChannelForm from '../../containers/EditChannelForm'
import { branch, renderComponent } from 'recompose'
import { MODAL_TYPES } from '../../constants'
import PropTypes from 'prop-types'

const customStyles = {
  content: {
    width: '80%',
    height: '50%',
    left: '0px',
    top: '0px',
    bottom: '0px',
    right: '0px',
    padding: 0,
    overflow: 'scroll',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    minHeight: '500px',
  },
  overlay: {
    width: '100%',
  },
}

const EnhancedChannelForm = branch(
  props => props.modalType === MODAL_TYPES.ADD_CHANNEL_MODAL,
  renderComponent(AddChannelForm),
)(EditChannelForm)

const ChannelFormModal = ({ onClose, modalData, modalType }) => (
  <div>
    <Modal
      isOpen
      onRequestClose={onClose}
      style={customStyles}
      shouldCloseOnOverlayClick
    >
      <EnhancedChannelForm onSaveSuccess={onClose} modalType={modalType} modalData={modalData}/>
    </Modal>
  </div>
)

ChannelFormModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  modalData: PropTypes.object.isRequired,
  modalType: PropTypes.string.isRequired,
}

export default ChannelFormModal
