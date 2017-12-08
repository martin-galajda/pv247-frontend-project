import Spinner from 'react-icons/lib/fa/spinner'
import { Container, IconContainer } from './styled'
import PropTypes from 'prop-types'

const SpinnerContainer = ({ spinnerStyles }) => (
  <Container {...spinnerStyles} >
    <IconContainer {...spinnerStyles}>
      <Spinner />
    </IconContainer>
  </Container>
)

SpinnerContainer.propTypes = {
  spinnerStyles: PropTypes.object,
}

SpinnerContainer.defaultProps = {
  spinnerStyles: {},
}

export default SpinnerContainer
