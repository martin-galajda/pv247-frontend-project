import UserIcon from 'react-icons/lib/fa/user'
import { AvatarContainer, UserEmail, DropdownItem } from './styled'
import PropTypes from 'prop-types'
import Dropdown from '../Dropdown'
import ProfileModal from '../../containers/ProfileModal'
import UserPhoto from '../UserPhoto'
import { withState, branch, renderComponent, renderNothing } from 'recompose'

const withToggleState = withState('dropdownShown', 'toggleDropdown', false)
const withModalState = withState('profileModalShown', 'showModal', false)

const TogglableDropdown = branch(
  props => !props.isShown,
  renderNothing
)(Dropdown)

const Avatar = ({ dropdownShown, toggleDropdown, profileModalShown, showModal, user }) => (
  <AvatarContainer onClick={() => toggleDropdown(isShown => !isShown)}  >
    <UserPhoto user={user}/>
    <TogglableDropdown isShown={dropdownShown}>
      <DropdownItem onClick={() => showModal(() => true)}>Edit profile</DropdownItem>
    </TogglableDropdown>

    <ProfileModal
      isOpen={profileModalShown}
      closeModal={() => showModal(() => false)}
    />
  </AvatarContainer>
)


export default withModalState(withToggleState(Avatar))