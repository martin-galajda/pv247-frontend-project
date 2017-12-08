import { AvatarContainer, DropdownItem } from './styled'
import PropTypes from 'prop-types'
import Dropdown from '../Dropdown'
import ProfileModal from '../../containers/ProfileModal'
import UserPhoto from '../UserPhoto'
import { withState, branch, renderNothing } from 'recompose'

const withToggleState = withState('dropdownShown', 'toggleDropdown', false)
const withModalState = withState('profileModalShown', 'showModal', false)

const TogglableDropdown = branch(
  props => !props.isShown,
  renderNothing,
)(Dropdown)

const Avatar = ({ dropdownShown, toggleDropdown, profileModalShown, showModal, user, logout }) => (
  <AvatarContainer onClick={() => toggleDropdown(isShown => !isShown)} >
    <UserPhoto user={user}/>
    <TogglableDropdown isShown={dropdownShown}>
      <DropdownItem onClick={() => showModal(() => true)}>Edit profile</DropdownItem>
      <DropdownItem onClick={logout}>Logout</DropdownItem>
    </TogglableDropdown>

    <ProfileModal
      isOpen={profileModalShown}
      closeModal={() => showModal(() => false)}
    />
  </AvatarContainer>
)

Avatar.propTypes = {
  dropdownShown: PropTypes.bool.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
  profileModalShown: PropTypes.bool.isRequired,
  showModal: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
}

export default withModalState(withToggleState(Avatar))
