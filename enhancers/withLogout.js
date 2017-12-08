import { connect } from 'react-redux'
import { actions } from '../redux'

export default connect(null, {
  logout: actions.auth.logout,
})
