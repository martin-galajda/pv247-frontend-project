import Modal from 'react-modal'
import ProfileSettings from '../../containers/ProfileSettingsForm'
import CloseIcon from 'react-icons/lib/fa/close'
import { ModalHeader, IconWrapper, ModalFooter } from './styled'

const customStyles = {
  content : {
    width: '100%',
    height: '100%',
    left: '0px',
    top: '0px',
    bottom: '0px',
    right: '0px',
    'marginLeft': '0%',
    padding: 0,
    overflow: 'hidden',
  },
  overlay: {
    width: '85%',
    'marginLeft': '15%',
  }
}

const ProfileModal = ({ isOpen, closeModal, onSave }) => (
  <div>
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Edit your profile"
    >
      <ModalHeader>
        <IconWrapper>
          <CloseIcon onClick={closeModal} />        
        </IconWrapper>
      </ModalHeader>
      <ProfileSettings closeModal={closeModal} />
      <ModalFooter>
        <button onClick={onSave}>Save</button>
      </ModalFooter>
    </Modal>
  </div>
)

export default ProfileModal
