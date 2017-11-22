import { Container, Item , DropdownBox, Caret} from './styled'
import { } from 'recompose'

const defaultItems = [
  {
    name: 'First',
  },
  {
    name: 'First',
  },
  {
    name: 'First',
  },
  {
    name: 'First',
  },
]

const Dropdown = ({ children }) => (
  <DropdownBox>
    <Caret />      
    <Container>
      {children}
    </Container>
  </DropdownBox>
)

export default Dropdown
