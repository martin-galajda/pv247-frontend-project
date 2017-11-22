import { connect } from 'react-redux'

export default connect(state => {
  return {
    user: {
      email: state.user.email,
      customData: state.user.customData,
    }
  }
})
