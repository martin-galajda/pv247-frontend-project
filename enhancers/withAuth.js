import { compose } from 'recompose'
import { Component } from 'react'
import { connect } from 'react-redux'
import { actions } from '../redux'
import Spinner from '../components/Spinner'

import PropTypes from 'prop-types'

const withAuth = compose(
  connect(state => ({
    authVerified: state.auth.initialized,
    authenticated: state.auth.isAuthenticated,
  }), {
    loginSuccess: actions.auth.loginSuccess,
    requestGetUserData: actions.user.requestGetUserData,
    checkRouteAuth: actions.user.checkRouteAuth,
  }),
  ProtectedComponent => class AuthenticatedPage extends Component {
    static propTypes = {
      url: PropTypes.object.isRequired,
      checkRouteAuth: PropTypes.func.isRequired,
      requestGetUserData: PropTypes.func.isRequired,
      authVerified: PropTypes.bool.isRequired,
    }

    componentDidMount() {
      const accessToken = localStorage.getItem('accessToken')
      const email = localStorage.getItem('userEmail')
      const path = this.props.url.asPath

      if (!accessToken) {
        this.props.checkRouteAuth({ path, hasValidAccessToken: false })
      } else {
        this.props.requestGetUserData({ path, accessToken, email })
      }
    }

    render() {
      if (this.props.authVerified) {
        return <ProtectedComponent {...this.props} />
      }
      return <Spinner />
    }
  },
)

export default withAuth
