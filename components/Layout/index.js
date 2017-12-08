import Header from '../Header'
import { LayoutContainer, Content, LayoutContent } from './styled'
import Sidebar from '../../containers/Sidebar'
import ModalContainer from '../../containers/ModalContainer'
import PropTypes from 'prop-types'

const Layout = ({ children, user, logout }) => (
  <LayoutContainer>
    <Sidebar />
    <LayoutContent>
      <ModalContainer />
      <Header user={user} logout={logout}/>
      <Content>
        {children}
      </Content>
    </LayoutContent>
  </LayoutContainer>
)

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
}

Layout.defaultProps = {
  children: [],
}


export default Layout
