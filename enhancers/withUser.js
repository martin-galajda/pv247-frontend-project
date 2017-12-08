import { connect } from 'react-redux'

export default connect(state => ({
  user: {
    email: state.user.currentUser ? state.user.currentUser.email : '',
    customData: state.user.currentUser ? state.user.currentUser.customData : null,
  },
}))
