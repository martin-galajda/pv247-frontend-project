import Modal from 'react-modal'
import CloseIcon from 'react-icons/lib/fa/close'
import AddChannelForm from '../../containers/AddChannelForm'

const customStyles = {
  content : {
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
  },
  overlay: {
    width: '100%',
  }
}

const AddChannelModal = ({ isOpen, onClose, onSave }) => (
  <div>
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      style={customStyles}
      shouldCloseOnOverlayClick={true}      
      contentLabel="Add channel"
    >
      <AddChannelForm onSaveSuccess={onClose} />
    </Modal>
  </div>
)

export default AddChannelModal
