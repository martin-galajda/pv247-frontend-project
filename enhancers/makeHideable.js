import { branch, renderNothing } from 'recompose'

export default branch(
  props => !props.show,
  renderNothing,
)
