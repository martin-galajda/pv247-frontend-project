import {
  HeaderBar,
  Title,
  UserEmail,
} from './styled'
import PropTypes from 'prop-types'

import Avatar from '../Avatar'

const getUserTitle = user =>
  user.customData && user.customData.firstName
    ? `${user.customData.firstName} ${user.customData.lastName}`
    : user.email

const Header = ({ user, logout }) => (
  <HeaderBar>
    <Title></Title>
    <Avatar user={user} logout={logout}/>
    <UserEmail>{getUserTitle(user)}</UserEmail>
  </HeaderBar>
)

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    customData: PropTypes.object.isRequired,
  }).isRequired,
  logout: PropTypes.func.isRequired,
}


export default Header
