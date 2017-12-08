import { Page, PageBackground } from './styled'
import PropTypes from 'prop-types'

const RegisterPage = ({ children }) => (
  <Page>
    <PageBackground />
    {children}
  </Page>
)

RegisterPage.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

RegisterPage.defaultProps = {
  children: [],
}

export default RegisterPage

