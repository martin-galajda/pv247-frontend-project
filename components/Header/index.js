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

const Header = ({ user }) => (
    <HeaderBar>
        <Title>Messenger app</Title>
        <Avatar user={user} />
        <UserEmail>{getUserTitle(user)}</UserEmail>        
    </HeaderBar>
)

Header.propTypes = {
    user: PropTypes.shape({
      email: PropTypes.string.isRequired,
      customData: PropTypes.object.isRequired,
    })
}
  

export default Header
