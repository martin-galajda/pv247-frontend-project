import { branch, renderComponent } from 'recompose'
import Spinner from '../components/Spinner'

export default branch(
  props => props.isLoading,
  renderComponent(Spinner),
)
