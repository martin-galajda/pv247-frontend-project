import { Container, DropdownBox, Caret } from './styled'
import PropTypes from 'prop-types'

const Dropdown = ({ children }) => (
  <DropdownBox>
    <Caret />
    <Container>
      {children}
    </Container>
  </DropdownBox>
)

Dropdown.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

Dropdown.defaultProps = {
  children: [],
}

export default Dropdown
