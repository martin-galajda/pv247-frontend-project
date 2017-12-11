import { lifecycle, compose } from 'recompose'
import { connect } from 'react-redux'
import { actions } from '../../redux'
import App from '../../components/App'
import Router from 'next/router'

export default compose(
  connect(null, {
    initRouter: actions.router.routeChangeFinish,
  }),
  lifecycle({
    componentDidMount() {
      this.props.initRouter(Router.asPath)
    },
  }),
)(App)

