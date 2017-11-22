import Header from '../Header'
import { LayoutContainer, Content, LayoutContent } from './styled'
import Sidebar from '../../containers/Sidebar'
import ModalContainer from '../../containers/ModalContainer'

const Layout = ({ children, user }) => (
  <LayoutContainer>
    <Sidebar />
    <LayoutContent>
      <ModalContainer />
      <Header user={user}/>
      <Content>
        {children}
      </Content>
    </LayoutContent>
  </LayoutContainer>
)

export default Layout
