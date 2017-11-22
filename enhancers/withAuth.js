import { compose } from 'recompose'
import Router from 'next/router'
import { Component } from 'react'
import { connect } from 'react-redux'
import { actions } from '../redux'

let authenticated = false 

const withAuth = compose(
    connect(state => ({
        authVerified: state.auth.initialized,
        authenticated: state.auth.isAuthenticated,
    }), {
        loginSuccess: actions.auth.loginSuccess,
        requestGetUserData: actions.user.requestGetUserData,
        checkRouteAuth: actions.user.checkRouteAuth,
    }),
    (ProtectedComponent) => class AuthenticatedPage extends Component {
        constructor() {
            super()
        }
    
        componentDidMount() {
            const accessToken = localStorage.getItem('accessToken')
            const email = localStorage.getItem('userEmail')
            if (!accessToken) {
                this.props.checkRouteAuth({ path, hasValidAccessToken: false })
            } else {
                const path = this.props.url.asPath
                this.props.requestGetUserData({ path, accessToken, email })
            }
        }
        
        render() {
            if (this.props.authVerified) {
                return <ProtectedComponent {...this.props} />
            }
            return "Loading..."
        }
    }    
)

export default withAuth
