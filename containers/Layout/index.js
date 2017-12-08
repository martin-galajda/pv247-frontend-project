import Layout from '../../components/Layout'
import withUser from '../../enhancers/withUser'
import withLogout from '../../enhancers/withLogout'

export default withLogout(withUser(Layout))
