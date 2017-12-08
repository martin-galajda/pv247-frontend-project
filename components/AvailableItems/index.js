import { Row, Container } from './styled'
import PropTypes from 'prop-types'

const AvailableItems = ({ items, filterByName, show }) => (
  <Container>
    {items.filter(item => show && item.name.includes(filterByName)).map(item => (
      <Row key={item.id}>
        {item.name}
      </Row>
    ))}
  </Container>
)

AvailableItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
  filterByName: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
}

export default AvailableItems
