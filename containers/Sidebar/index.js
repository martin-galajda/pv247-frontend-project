import Sidebar from '../../components/Sidebar'
import withSidebarActions from '../../enhancers/withSidebarActions'
import { withRouter } from 'next/router'

export default withRouter(withSidebarActions(Sidebar))
