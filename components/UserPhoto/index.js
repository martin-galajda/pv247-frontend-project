
import UserIcon from 'react-icons/lib/fa/user'
import PropTypes from 'prop-types'
import { branch, renderComponent } from 'recompose'
import { ProfilePhoto } from './styled'

const UserPhoto = branch(
  props => !props.user.customData || !props.user.customData.profileImageUrl,
  renderComponent(UserIcon)
)(ProfilePhoto)

export default UserPhoto
