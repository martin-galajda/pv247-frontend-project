import '../../utils/polyfills'
import './globalStyles'
import PropTypes from 'prop-types'

const mainStyles = {
  margin: 'auto',
  height: '100%',
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
}

const App = ({ children }) => (
  <main style={mainStyles}>
    {children}
  </main>
)

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default App
