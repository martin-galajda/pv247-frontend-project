import React from 'react'

import { Provider } from 'react-redux'
import initRedux from '../utils/initRedux'

// Gets the display name of a JSX component for dev tools
function getComponentDisplayName(Component) {
  return Component.displayName || Component.name || 'Unknown'
}

const withRedux = ComposedComponent => class WithRedux extends React.Component {
  static displayName = `WithRedux(${getComponentDisplayName(ComposedComponent)})`

  constructor(props) {
    super(props)
    this.redux = initRedux()
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
