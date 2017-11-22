import React from 'react'
import PropTypes from 'prop-types'

import { Provider } from 'react-redux'
import initRedux from '../utils/initRedux'

// Gets the display name of a JSX component for dev tools
function getComponentDisplayName(Component) {
  return Component.displayName || Component.name || 'Unknown'
}

let redux

const withRedux = ComposedComponent => class WithRedux extends React.Component {
  static displayName = `WithRedux(${getComponentDisplayName(ComposedComponent)})`

  static propTypes = {
    serverState: PropTypes.object.isRequired,
  }

  static async getInitialProps(ctx) {
    let serverState = {}

    // Evaluate the composed component's getInitialProps()
    let composedInitialProps = {}
    if (ComposedComponent.getInitialProps) {
      composedInitialProps = await 
    }

    // eslint-disable-next-line
    return {
      serverState,
      ...composedInitialProps,
    }
  }

  constructor(props) {
    super(props)
    this.redux = initRedux(this.props.serverState)
  }

  render() {
    return (
      // No need to use the Redux Provider
      // because Apollo sets up the store for us
      <Provider store={this.redux}>
        <ComposedComponent {...this.props} />
      </Provider>
    )
  }
}

export default withRedux
